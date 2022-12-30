import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="description" content="Professional electrician services for repairs, installations, and maintenance." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>


}
