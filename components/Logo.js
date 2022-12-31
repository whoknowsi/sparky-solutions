import React from 'react'
import styles from '../styles/components/Logo.module.css'
import { FaStripeS } from 'react-icons/fa'
import Link from 'next/link'

const Logo = ({ color }) => {
    return (
        <Link href='/' className={styles.container}>
            <div className={styles.logo}>
                <FaStripeS />
                <div style={{
                    color: color
                }}>
                    <span>PARKY</span>
                    <span>OLUTIONS</span>
                </div>
            </div>
        </Link>
    )
}

export default Logo