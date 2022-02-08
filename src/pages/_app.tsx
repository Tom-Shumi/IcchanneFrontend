import '../styles/globals.css'
import Head from "next/head";
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/react-hooks';
import { apolloClient }from 'utils/ApolloClientUtils';
import GoogleAnalytics from 'lib/GoogleAnalytics'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  </>
)

export default MyApp
