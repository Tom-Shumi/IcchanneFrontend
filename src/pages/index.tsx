import type { NextPage } from 'next'
import Header from 'components/common/Header'
import Footer from 'components/common/Footer'
import MetaHead from 'components/common/MetaHead'
import NewThread from 'components/home/NewThread'


const Home: NextPage = () => {
    return (
        <>
            <MetaHead title='癒っちゃんねる' />
            <Header />
            <NewThread />
            <Footer />
        </>
    )
}

export default Home
