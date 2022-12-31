import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HowCanWeHelpSection from '../components/Home/HowCanWeHelpSection'
import MainSection from '../components/Home/MainSection'
import WhyOurCustomerChooseUsSection from '../components/Home/WhyOurCustomerChooseUsSection'
import MapSection from '../components/MapSection/MapSection'


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
        <WhyOurCustomerChooseUsSection />
        <MapSection />
      </main>
      <Footer />
    </>
  )
}
