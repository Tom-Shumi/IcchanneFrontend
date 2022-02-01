import type { NextPage } from 'next'
import Image from 'next/image'
import styles from 'styles/Header.module.css'
import Logo from 'public/logo.png'

const Header: NextPage = () => {
    return (
        <div className={styles.header}>
            <Image src={Logo} alt="癒っちゃんねる" />
        </div>
    )
}

export default Header
