import type { NextPage } from 'next'
import Image from 'next/image'
import styles from 'styles/NewThread.module.css'
import NewThreadLogo from 'public/new_thread_logo.png'
import Thread from 'components/home/Thread'
import * as graphql from 'components/generated/graphql'
import Router from 'next/router'
import {env} from 'utils/CommonUtils';

const NewThread: NextPage = () => {

    const { called, loading, data, error } = graphql.useGetNewThreadListQuery();
    if (called && loading) return <p className={styles.newThread}>Loading ...</p>
    if (error) Router.push(env(process.env.NEXT_PUBLIC_ERROR_PAGE))

    let newThreadList = data?.getNewThreadList?? [];

    console.log(newThreadList)

    return (
        <div className={styles.newThread}>
            <Image src={NewThreadLogo} alt="新着まとめ記事" />
            <hr className={styles.dashHr}/>
            {
                newThreadList.map((newThread) => (
                    <Thread key={`newThread${newThread!!.id}`} thread={newThread!!} />
                ))
            }
        </div>
    )
}

export default NewThread
