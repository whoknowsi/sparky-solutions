import Head from 'next/head'
import MainSection from '../../components/About/MainSection'
import OurServicesSection from '../../components/About/OurServicesSection'
import CallUseMiddleSection from '../../components/CallUsNowMiddleSection'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MapSection from '../../components/MapSection/MapSection'

export default function About() {
    return (
        <>
            <Head>
                <title>Sparky solutions - About</title>
            </Head>
            <Header />
            <main>
                <MainSection />
                <CallUseMiddleSection />
                <OurServicesSection />
                <MapSection />
            </main>
            <Footer />
        </>
    )
}
