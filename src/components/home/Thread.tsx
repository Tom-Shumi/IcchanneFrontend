import type { NextPage } from 'next'
import Image from 'next/image'
import styles from 'styles/Thread.module.css'
import image from 'public/relax.png'
import {Row, Col, Button} from 'react-bootstrap';

const NewThread: NextPage = () => {
    return (
        <div className={styles.thread}>
            <Row>
                <Col xs={2}>
                    <Image src={image} alt="画像" width={100} height={100} />
                </Col>
                <Col xs={10}>
                    <label className={styles.publishedDate}>2022年01月22日</label>
                    <a className={styles.title}>【画像あり】めちゃくちゃ可愛い犬を発見しました。</a>
                    <Button variant="outline-info" className={styles.readThreadButton}>記事を読む ▶︎</Button>
                </Col>
            </Row>
        </div>
    )
}

export default NewThread
