import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../styles/Header.module.css'
import Logo from 'public/logo_big.png'

const Header: NextPage = () => {
    return (
        <div>
            <Image src={Logo} alt="癒っちゃんねる" />
        </div>
    )
}

export default Header
