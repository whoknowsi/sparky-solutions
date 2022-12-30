import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HowCanWeHelpSection from '../components/Home/HowCanWeHelpSection'
import MainSection from '../components/Home/MainSection'
import MapSection from '../components/MapSection/MapSection'
import WhyOurCustomerChooseUs from '../components/Home/WhyOurCustomerChooseUs/WhyOurCustomerChooseUs'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sparky solutions</title>
      </Head>
      <Header />
      <main>
        <MainSection />
        <HowCanWeHelpSection />
        <WhyOurCustomerChooseUs />
        <MapSection />
      </main>
      <Footer />
    </>
  )
}
