import styles from 'styles/Thread.module.css'
import {Row, Col, Button} from 'react-bootstrap';
import { Thread } from 'components/generated/graphql'
import {toString} from 'utils/DateTimeUtils'
import ThreadImage from 'components/common/ThreadImage'
import {useMobileScreen} from 'utils/CommonUtils'

interface Props {
    thread: Thread
}

const NewThread: React.FC<Props> = (props) => {
    if (useMobileScreen()) {
        return <></>
    } else {
        return (
            <div className={styles.thread}>
                <Row>
                    <Col xs={2}>
                        <ThreadImage category={props.thread.category!!} size={100}/>
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
}

export default NewThread
