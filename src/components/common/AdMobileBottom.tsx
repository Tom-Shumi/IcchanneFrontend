import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect } from 'react';
import styles from 'styles/Ad.module.css'

const AdBottom: NextPage = () => {

    useEffect(() => {
        const postscribe = require('postscribe');
        postscribe(
            '#admaxBottom',
            '<script src="https://adm.shinobi.jp/s/78f759386b8117ac20be23f76ff61fc9"></script>'
        );
    }, []);

    
    return (
        <div className={styles.adBottom}>
            <a href="https://rpx.a8.net/svt/ejp?a8mat=3N3RI4+7HPDTE+2HOM+6AC5D&rakuten=y&a8ejpredirect=http%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F0ea62065.34400275.0ea62066.204f04c0%2Fa22020526994_3N3RI4_7HPDTE_2HOM_6AC5D%3Fpc%3Dhttp%253A%252F%252Fwww.rakuten.co.jp%252F%26m%3Dhttp%253A%252F%252Fm.rakuten.co.jp%252F" rel="nofollow">
            <Image width="468" height="60" src="http://hbb.afl.rakuten.co.jp/hsb/0eb4bbce.0d9fcd76.0eb4bbaa.95151395/" alt="rakuten" /></a>
            <Image width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=3N3RI4+7HPDTE+2HOM+6AC5D" alt="" />

            <div id="admaxBottom"></div>
        </div>
    )

}

export default AdBottom
