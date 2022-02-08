import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloProvider } from '@apollo/react-hooks';
import { apolloClient }from 'utils/ApolloClientUtils';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  </>
)

export default MyApp
