import Head from 'next/head'

interface Props {
    title: string
}

const MetaHead: React.FC<Props> = (props: Props) => {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            
        </>
    )
}

export default MetaHead
