import type { NextPage } from 'next'
import Image from 'next/image'
import styles from 'styles/Header.module.css'
import Logo from 'public/logo.png'
import LogoBig from 'public/logo_big.png'
import {useMobileScreen} from 'utils/CommonUtils'

const Header: NextPage = () => {

    if (useMobileScreen()) {
        return (<div className={styles.headerMobile}>
                    <Image className={styles.imageMobile} src={Logo} alt="癒っちゃんねる" />
                </div>)
    } else {
        return (<div className={styles.header}>
                    <Image src={Logo} alt="癒っちゃんねる" />
                </div>)
    }

}

export default Header
