import Link from 'next/link'
import React from 'react'
import { FaRegArrowAltCircleDown, FaPhoneAlt } from 'react-icons/fa'
import CopyToClipboardButton from './CopyToClipboardButton'
import Logo from './Logo'
import styles from '../styles/components/Header.module.css'

const Header = () => {
    return (
        <header className={styles.container}>
            <nav >
                <Logo color="#000" />
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
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
                <div className={styles.cellPhone}>
                    <CopyToClipboardButton textToCopy={"01234567891"} primaryText={"0123 456 7891"} secondaryText={"Open 24/7"} Icon={FaPhoneAlt} />
                </div>
            </nav>
        </header>

    )
}

export default Header