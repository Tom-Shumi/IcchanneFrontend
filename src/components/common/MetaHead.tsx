/* eslint-disable @next/next/next-script-for-ga */
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
                <meta name='description' content='癒される記事だけを集めたまとめサイトです。日頃の仕事や人生に疲れたあなたの心を癒やす記事が盛り沢山！' />
                <link rel="icon" type="image/x-icon" href={favicon.src} />
                {/* <GoogleAnalytics />
                 */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-219699321-1" />
                <script dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-219699321-1', {
                        page_path: window.location.pathname,
                    });`,
                }} />
            </Head>
        </>
    )
}

export default MetaHead
