import Link from 'next/link'
import React, { useState } from 'react'
import { FaRegArrowAltCircleDown, FaPhoneAlt, FaBars } from 'react-icons/fa'
import CopyToClipboardButton from './CopyToClipboardButton'
import Logo from './Logo'
import styles from '../styles/components/Header.module.css'
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)

    return (
        <header className={`${styles.container} ${open ? styles.open : ''}`}>
            <div className={styles.background} onClick={() => setOpen(false)}></div>
            <nav>
                <div className={styles.alwaysOnTop}>
                    <Logo color="#000" />
                    <div className={styles.menuIcon}>
                        <button onClick={() => setOpen(!open)}>
                            <FaBars />
                        </button>
                    </div>
                </div>
                <ul>
                    <li className={router.pathname == "/" ? styles.active : ""}>
                        <Link onClick={() => setOpen(false)} href="/">Home</Link>
                    </li>
                    <li className={router.pathname == "/about" ? styles.active : ""}>
                        <Link onClick={() => setOpen(false)} href="/about">About</Link>
                    </li>
                    <li>
                        <Link onClick={() => setOpen(false)} href="/about#services">Services</Link>
                        <button>
                            <FaRegArrowAltCircleDown />
                        </button>
                    </li>
                    <li className={router.pathname == "/contact-us" ? styles.active : ""}>
                        <Link onClick={() => setOpen(false)} href="/contact-us">Contact Us</Link>
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