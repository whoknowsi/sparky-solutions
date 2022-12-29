import React from 'react'
import styles from '../styles/Footer.module.css'
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
                            <li><Link href='/repairs'>Repairs</Link></li>
                            <li><Link href='/intallations'>Intallations</Link></li>
                            <li><Link href='/maintenance'>Maintenance</Link></li>
                        </ul>
                    </div>
                    <div>
                        <label className={styles.title}>Company</label>
                        <ul>
                            <li><Link href='/about'>About</Link></li>
                            <li><Link href='/contact'>Contact</Link></li>
                            <li><Link href='/privacy-policy'>Privacy Policy</Link></li>
                            <li><Link href='/terms-and-conditions'>Terms & Conditions</Link></li>
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
                            <li><a href='https://www.linkedin.com/in/carlos-jofr%C3%A9-830273210/' target="_blank" rel="noreferrer"><FaLinkedinIn /></a></li>
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