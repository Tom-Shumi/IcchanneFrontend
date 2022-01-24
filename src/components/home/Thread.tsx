import Image from 'next/image'
import styles from 'styles/Thread.module.css'
import image from 'public/relax.png'
import {Row, Col, Button} from 'react-bootstrap';
import { Thread } from 'components/generated/graphql';
import {toString} from 'utils/DateTimeUtils'

interface Props {
    thread: Thread
}

const NewThread: React.FC<Props> = (props) => {
    return (
        <div className={styles.thread}>
            <Row>
                <Col xs={2}>
                    <Image src={image} alt="画像" width={100} height={100} />
                </Col>
                <Col xs={10}>
                    <label className={styles.publishedDate}>{toString(props.thread.publishedDate!!)}</label>
                    <a className={styles.title} href={props.thread.url!!} >{props.thread.title}</a>
                    <Button variant="outline-info" className={styles.readThreadButton} href={props.thread.url!!} >記事を読む ▶︎</Button>
                </Col>
            </Row>
        </div>
    )
}

export default NewThread
