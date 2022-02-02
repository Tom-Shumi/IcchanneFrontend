import type { NextPage } from 'next'
import Image from 'next/image'
import styles from 'styles/NewThread.module.css'
import NewThread from 'public/new_thread_logo.png'
import { Col } from 'react-bootstrap'
import {useMobileScreen} from 'utils/CommonUtils'

const NewThreadLogo: NextPage = () => {

    if (useMobileScreen()) {
        return (
            <Col md={6} xs={12} className={styles.newThreadLogoMobile}>
                <Image src={NewThread} alt="新着まとめ記事" />
            </Col>
        )
    } else {
        return (
            <Col md={6} xs={12}>
                <Image src={NewThread} alt="新着まとめ記事" />
            </Col>
        )
    }
}

export default NewThreadLogo
