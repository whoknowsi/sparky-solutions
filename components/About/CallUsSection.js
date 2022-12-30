import React from 'react'
import styles from '../../styles/components/About/CallUsSection.module.css'
import { FaPhoneAlt } from 'react-icons/fa'

const CallUsSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.iconContainer}>
                <FaPhoneAlt />
            </div>
            <h2>Call us now to book in an engineer!</h2>
            <div className={styles.pill}>0123 456 7891</div>
        </section>
    )
}

export default CallUsSection