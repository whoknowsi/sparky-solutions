import Head from 'next/head'
import Footer from '../components/Footer'
import HowCanWeHelpSection from '../components/Home/HowCanWeHelpSection'
import MainSection from '../components/Home/MainSection'
import MapSection from '../components/Home/MapSection'
import WhyOurCustomerChooseUs from '../components/Home/WhyOurCustomerChooseUs'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sparky solutions</title>
        <meta name="description" content="Professional electrician services for repairs, installations, and maintenance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <MainSection />
        <HowCanWeHelpSection />
        <WhyOurCustomerChooseUs />
        <MapSection />
      </main>
      <Footer />
    </>
  )
}
