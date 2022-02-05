import type { NextPage } from 'next'
import Header from 'components/common/Header'
import Footer from 'components/common/Footer'
import MetaHead from 'components/common/MetaHead'
import NewThread from 'components/home/NewThread'
import AdLeft from 'components/common/AdLeft'

const Home: NextPage = () => {
    return (
        <>
            <MetaHead title='癒っちゃんねる' />
            <Header />
            <AdLeft />
            <NewThread />
            <Footer />
        </>
    )
}

export default Home
