import type { NextPage } from 'next'
import Header from 'components/common/Header'
import MetaHead from 'components/common/MetaHead'
import ErrorComponent from 'components/common/Error';

const Error: NextPage = () => {
    return (
        <>
            <MetaHead title='癒っちゃんねる' />
            <Header />
            <ErrorComponent />
        </>
    )
}

export default Error
