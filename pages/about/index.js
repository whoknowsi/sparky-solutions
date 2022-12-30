import Head from 'next/head'
import CallUsSection from '../../components/About/CallUsSection'
import MainSection from '../../components/About/MainSection'
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
                <CallUsSection />
                <MapSection />
            </main>
            <Footer />
        </>
    )
}
