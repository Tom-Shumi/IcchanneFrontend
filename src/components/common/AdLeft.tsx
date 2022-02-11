import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect } from 'react';
import styles from 'styles/Ad.module.css'

const AdLeft: NextPage = () => {

    useEffect(() => {
        const postscribe = require('postscribe');
        postscribe(
            '#admaxLeft',
            '<script src="https://adm.shinobi.jp/s/2156aab21fc4c21b830b597b1039e969"></script>'
        );
    }, []);
    
    return (
        <div className={styles.adLeft}>
            <a href="https://rpx.a8.net/svt/ejp?a8mat=3N3RI4+7HPDTE+2HOM+64C3L&rakuten=y&a8ejpredirect=http%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F0ea62065.34400275.0ea62066.204f04c0%2Fa22020526994_3N3RI4_7HPDTE_2HOM_64C3L%3Fpc%3Dhttp%253A%252F%252Fwww.rakuten.co.jp%252F%26m%3Dhttp%253A%252F%252Fm.rakuten.co.jp%252F" rel="nofollow">
            <Image width="100" height="500" src="http://hbb.afl.rakuten.co.jp/hsb/0ec09b9f.d7b6fe2b.0eb4bbaa.95151395/" alt="rakuten" /></a>
            <Image width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=3N3RI4+7HPDTE+2HOM+64C3L" alt="" />
            
            <div id="admaxLeft"></div>
        </div>
    )

}

export default AdLeft
