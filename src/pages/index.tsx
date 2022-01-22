import type { NextPage } from 'next'
import Header from 'components/common/Header'
import MetaHead from 'components/common/MetaHead'
import NewThread from 'components/home/NewThread'

const Home: NextPage = () => {
    return (
        <>
            <MetaHead title='癒っちゃんねる' />
            <Header />
            <NewThread />
        </>
    )
}

export default Home
