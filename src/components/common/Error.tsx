import {Button} from 'react-bootstrap';
import ErrorImage from 'public/error.png';
import Image from 'next/image';
import styles from 'styles/Error.module.css';
import {backHome} from 'utils/CommonUtils';

const Error: React.FC = () => {

    return (
        <div className={styles.error}>
            <Image src={ErrorImage} alt="エラー" width={400} height={300} />
            <Button variant="outline-warning" className={styles.reloadButton} onClick={backHome} >再度読み込む</Button>
        </div>
    )
}

export default Error;