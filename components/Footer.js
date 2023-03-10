import React from 'react'
import styles from '../styles/components/Footer.module.css'
import Logo from './Logo'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <Logo color="#fff" />
                </div>
                <div className={styles.dataContainer}>
                    <div>
                        <label className={styles.title}>Services</label>
                        <ul>
                            <li><Link href='/#'>Repairs</Link></li>
                            <li><Link href='/#'>Intallations</Link></li>
                            <li><Link href='/#'>Maintenance</Link></li>
                        </ul>
                    </div>
                    <div>
                        <label className={styles.title}>Company</label>
                        <ul>
                            <li><Link href='/about'>About</Link></li>
                            <li><Link href='/contact-us'>Contact Us</Link></li>
                            <li><Link href='/#'>Privacy Policy</Link></li>
                            <li><Link href='/#'>Terms & Conditions</Link></li>
                        </ul>
                    </div>
                    <div>
                        <label className={styles.title}>Contact</label>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                    </div>
                    <div className={styles.socialMedia}>
                        <label className={styles.title}>Follow Us:</label>
                        <ul>
                            <li><a href='https://github.com/whoknowsi/' target="_blank" rel="noreferrer"><FaGithub /></a></li>
                            <li><a href='https://www.linkedin.com/in/carlos-german-jofre/' target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.copyrightContainer}>
                    <label>Copyright © banner</label>
                </div>
            </div>
        </footer>
    )
}

export default Footer