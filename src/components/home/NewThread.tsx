import type { NextPage } from 'next'
import Image from 'next/image'
import styles from 'styles/NewThread.module.css'
import NewThreadLogo from 'public/new_thread_logo.png'
import Thread from 'components/home/Thread'
import * as graphql from 'components/generated/graphql'
import Router from 'next/router'
import { env } from 'utils/CommonUtils';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const NewThread: NextPage = () => {

    const [newThreadList, setNewThreadList] = useState<any[]>([]);
    const { called, loading, data, error } = graphql.useGetNewThreadListQuery();
    const [ getNewThreadListLazyQuery, {data: lazyData} ] = graphql.useGetNewThreadListLazyQuery({fetchPolicy: "network-only"});
    
    useEffect(() => {
        setNewThreadList(data?.getNewThreadList?? [])
    }, [data])

    useEffect(() => {
        if (lazyData?.getNewThreadList != null && lazyData?.getNewThreadList.length != 0) {
            setNewThreadList(newThreadList.concat(lazyData?.getNewThreadList))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lazyData])

    if (called && loading || newThreadList[0] == undefined) return <p className={styles.newThread}>Loading ...</p>
    if (error) Router.push(env(process.env.NEXT_PUBLIC_ERROR_PAGE))

    const loadNextThread = () => {
        if (newThreadList.length == 0) {
            return;
        }
        let oldestDate = newThreadList[newThreadList.length - 1].publishedDate;
        getNewThreadListLazyQuery({ variables: {next: oldestDate} })
    }

    return (
        <div className={styles.newThread}>
            <Image src={NewThreadLogo} alt="新着まとめ記事" />
            <hr className={styles.dashHr}/>
            {
                newThreadList.map((newThread: graphql.Thread) => (
                    <Thread key={`newThread${newThread!!.id}`} thread={newThread!!} />
                ))
            }
            <Button variant="outline-primary" onClick={loadNextThread} className={styles.moreLoadButton}>次の記事を読み込む</Button>
        </div>
    )
}

export default NewThread
