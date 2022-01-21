import type { NextPage } from 'next'
import Header from 'components/common/Header'
import MetaHead from 'components/common/MetaHead'

const Home: NextPage = () => {
    return (
        <>
            <MetaHead title='癒っちゃんねる' />
            <Header />
        </>
  )
}

export default Home
