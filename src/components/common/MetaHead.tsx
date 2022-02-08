import GoogleAnalytics from 'lib/GoogleAnalytics';
import Head from 'next/head'
import favicon from 'public/favicon.ico';

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
                <link rel="icon" type="image/x-icon" href={favicon.src} />
                <GoogleAnalytics />
            </Head>
        </>
    )
}

export default MetaHead
