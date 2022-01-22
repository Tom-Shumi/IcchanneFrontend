import type { NextPage } from 'next'
import Image from 'next/image'
import styles from 'styles/NewThread.module.css'
import NewThreadLogo from 'public/new_thread_logo.png'
import Thread from 'components/home/Thread'

const NewThread: NextPage = () => {
    return (
        <div className={styles.newThread}>
            <Image src={NewThreadLogo} alt="新着まとめ記事" />
            <hr className={styles.dashHr}/>
            <Thread />
            <Thread />
        </div>
    )
}

export default NewThread
