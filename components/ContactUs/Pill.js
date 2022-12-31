import React from 'react'
import styles from '../../styles/components/ContactUs/Pill.module.css'

const Pill = ({ Icon, title, description }) => {
    return (
        <div className={styles.container}>
            <div className={styles.icon}>
                <Icon />
            </div>
            <div className={styles.content}>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Pill