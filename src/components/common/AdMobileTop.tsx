import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect } from 'react';
import styles from 'styles/Ad.module.css'

const AdTop: NextPage = () => {

    useEffect(() => {
        const postscribe = require('postscribe');
        postscribe(
            '#admaxTop',
            '<script src="https://adm.shinobi.jp/s/da6bdc7f8125462c1491d8cd9aa2b0c8"></script>'
        );
    }, []);
    
    return (
        <div className={styles.adTop}>
            <a href="https://px.a8.net/svt/ejp?a8mat=3N3SA7+5CB16A+2GMK+ZT0BL" rel="nofollow">
                <Image width="468" height="60" alt="dmm" src="https://www22.a8.net/svt/bgt?aid=220206319323&wid=001&eno=01&mid=s00000011486006014000&mc=1" />
            </a>
            <Image width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=3N3SA7+5CB16A+2GMK+ZT0BL" alt="" />

            <div id="admaxTop"></div>
        </div>
    )

}

export default AdTop
