import Image from 'next/image'
import React from 'react'
import styles from '../../styles/components/Home/HowCanWeHelpSection.module.css'

const HowCanWeHelpSection = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h2>
                        How can <span className='underlinedWord'>we help</span> you?
                    </h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                        a type specimen book.</p>
                    <p>
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </p>
                    <p>
                        It was popularised in the 1960s with the release of Letraset sheets containing
                        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                </div>
                <div className={styles.bannerContainer}>
                    <div className={styles.banner}>
                        <div className={styles.bannerText}>
                            <h3>
                                Call us now to chat with an expert in the field!
                            </h3>
                            <div>
                                0123 456 7891
                            </div>
                        </div>
                    </div>
                    <div className={styles.bannerImageContainer}>
                        <Image src={`${process.env.BASE_PATH}/images/portrait-worker-with-tools.png`} width='2392' height='3328' alt='portrait of worker with tools' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowCanWeHelpSection