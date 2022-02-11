import type { NextPage } from 'next'
import styles from 'styles/NewThread.module.css'
import NewThreadLogo from 'components/home/NewThreadLogo'
import LoadNextThreadButton from 'components/home/LoadNextThreadButton'
import Thread from 'components/home/Thread'
import * as graphql from 'components/generated/graphql'
import Router from 'next/router'
import { env } from 'utils/CommonUtils';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import {useMobileScreen} from 'utils/CommonUtils'
import AdLeft from 'components/common/AdLeft'
import AdRight from 'components/common/AdRight'
import AdTop from 'components/common/AdMobileTop'
import AdBottom from 'components/common/AdMobileBottom'
import AdmaxSwitch from 'utils/AdmaxSwitch'

const NewThread: NextPage = () => {

    const [newThreadList, setNewThreadList] = useState<any[]>([]);
    const [searchText, setSearchText] = useState("");
    const [searchedText, setSearchedText] = useState("");
    const { called, loading, data, error } = graphql.useGetNewThreadListQuery();
    const [ getNewThreadListLazyQuery, {data: lazyData} ] = graphql.useGetNewThreadListLazyQuery({fetchPolicy: "network-only"});
    
    const isMobileScreen = useMobileScreen() ? true : false;
    const newThreadStyle = isMobileScreen ? styles.newThreadMobile : styles.newThread;

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
        getNewThreadListLazyQuery({ variables: {search: searchedText, next: oldestDate} })
    }

    const handleChangeSearchText = () => {
        return (e: any) => {
            setSearchText(e.target.value);
        };
    }

    const search = () => {
        setSearchedText(searchText);
        setNewThreadList([]);
        getNewThreadListLazyQuery({ variables: {search: searchText} });
    }

    return (
        <div className={newThreadStyle}>
            {isMobileScreen || <AdLeft />}
            {isMobileScreen && <AdTop />}
            <div>
                <Row>
                    <NewThreadLogo />
                    <Col md={6} xs={12}>
                        <Form.Control className={styles.searchText} type="text" value={searchText} onChange={handleChangeSearchText()} placeholder="記事検索" />
                        <Button variant="outline-success" className={styles.searchIcon} onClick={search}>🔍</Button>
                    </Col>
                </Row>
                <hr className={styles.dashHr}/>
                {
                    newThreadList.map((newThread: graphql.Thread) => (
                        <Thread key={`newThread${newThread!!.id}`} thread={newThread!!} />
                    ))
                }
                <LoadNextThreadButton loadNextThread={loadNextThread}/>
            </div>
            {isMobileScreen || <AdRight />}
            {isMobileScreen && <AdBottom />}
            {isMobileScreen && 
                <script async src="https://adm.shinobi.jp/s/78f759386b8117ac20be23f76ff61fc9" />
            }
        </div>
    )
}

export default NewThread
