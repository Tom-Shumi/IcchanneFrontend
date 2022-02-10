import type { NextPage } from 'next'
import Header from 'components/common/Header'
import Footer from 'components/common/Footer'
import MetaHead from 'components/common/MetaHead'
import NewThread from 'components/home/NewThread'
import styles from 'styles/Home.module.css'


const Home: NextPage = () => {
    return (
        <>
            <MetaHead title='癒っちゃんねる' />
            <Header />
            <h1 className={styles.h1}>癒される記事だけを集めたまとめサイトです。<br />
            日頃の仕事や人生に疲れたあなたの心を癒やす記事が盛り沢山！</h1>
            <NewThread />
            <Footer />
        </>
    )
}

export default Home
