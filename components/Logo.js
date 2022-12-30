import React from 'react'
import styles from '../styles/components/Logo.module.css'
import { FaStripeS } from 'react-icons/fa'

const Logo = ({ color }) => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <FaStripeS />
                <div style={{
                    color: color
                }}>
                    <span>PARKY</span>
                    <span>OLUTIONS</span>
                </div>
            </div>
        </div>
    )
}

export default Logo