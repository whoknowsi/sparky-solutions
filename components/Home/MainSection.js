import styles from '../../styles/MainSection.module.css'
import { FaPhoneAlt, FaStripeS, FaRegArrowAltCircleDown } from 'react-icons/fa'

import Link from 'next/link'
import CopyToClipboardButton from '../CopyToClipboardButton'
import SelectServiceInput from '../SelectServiceInput'

import Image from 'next/image'

const testsOptions = [
    { value: 'first option', label: 'First option' },
    { value: 'second option', label: 'Second option' },
    { value: 'third option', label: 'Third option' },
    { value: 'fourth option', label: 'Fourth option' },
]

import React from 'react'

const MainSection = () => {
    return (
        <section className={styles.container}>
            <nav>
                <div className={styles.logo}>
                    <FaStripeS />
                    <div>
                        <span>PARKY</span>
                        <span>OLUTIONS</span>
                    </div>
                </div>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">Home</Link>
                    </li>
                    <li>
                        <Link href="/services">Services</Link>
                        <button>
                            <FaRegArrowAltCircleDown />
                        </button>
                    </li>
                    <li>
                        <Link href="/contact-us">Contact Us</Link>
                    </li>
                </ul>
                <div>
                    <CopyToClipboardButton textToCopy={"01234567891"} primaryText={"0123 456 7891"} secondaryText={"Open 24/7"} Icon={FaPhoneAlt} />
                </div>
            </nav>
            <article className={styles.selectServiceContainer}>
                <h2>
                    <span>Need an electrician?</span>
                </h2>
                <div>
                    <ul>
                        <li>
                            <SelectServiceInput
                                placeholder="Electrical repairs"
                                options={testsOptions} />
                        </li>
                        <li>
                            <SelectServiceInput
                                placeholder="Electrical installations"
                                options={testsOptions} />
                        </li>
                        <li>
                            <SelectServiceInput
                                placeholder="Electrical maintenance"
                                options={testsOptions} />
                        </li>
                    </ul>
                </div>
            </article>
            <article className={styles.presentationContainer}>
                <div className={styles.presentation}>
                    <h2>
                        <span><span className='underlinedWord'>Professional</span> electrician services for repairs, installations & maintenance.</span>
                    </h2>
                    <h3>
                        <span>We are here for you 24/7</span>
                    </h3>
                    <p>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                            vitae nisl euismod, ultricies nisl sed, ultricies nisl. Sed
                            vitae nisl euismod, ultricies nisl sed, ultricies nisl. Sed
                            vitae nisl euismod, ultricies nisl sed, ultricies nisl. Sed
                            vitae nisl euismod, ultricies nisl sed, ultricies nisl. Sed
                            vitae nisl euismod, ultricies nisl sed, ultricies nisl.
                        </span>
                    </p>
                </div>
                <div className={styles.presentationIlustration}>
                    <Image src="/svg/presentation.svg" alt="presentation svg" width='530' height='539' />
                </div>
            </article>
        </section>
    )
}

export default MainSection