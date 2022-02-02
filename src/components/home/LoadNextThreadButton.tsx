import styles from 'styles/NewThread.module.css'
import { Button } from 'react-bootstrap';
import {useMobileScreen} from 'utils/CommonUtils'

interface Props {
    loadNextThread: () => void
}

const LoadNextThreadButton: React.FC<Props> = (props) => {

    if (useMobileScreen()) {
        return (
            <Button variant="outline-primary" onClick={props.loadNextThread} 
                className={styles.moreLoadButtonMobile}>次の記事を読み込む</Button>
        )
    } else {
        return (
            <Button variant="outline-primary" onClick={props.loadNextThread} 
                className={styles.moreLoadButton}>次の記事を読み込む</Button>
        )
    }
}

export default LoadNextThreadButton