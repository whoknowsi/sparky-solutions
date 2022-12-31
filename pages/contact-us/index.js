import Head from 'next/head'
import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MapSection from '../../components/MapSection/MapSection'
import CallUsNowMiddleSection from '../../components/CallUsNowMiddleSection'
import GetInTouchSection from '../../components/ContactUs/GetInTouchSection'

const ContactUs = () => {
    return (
        <>
            <Head>
                <title>Sparky solutions</title>
            </Head>
            <Header />
            <main>
                <GetInTouchSection />
                <CallUsNowMiddleSection />
                <MapSection />
            </main>
            <Footer />
        </>
    )
}

export default ContactUs