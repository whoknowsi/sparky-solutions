import React, { useState } from 'react'
import styles from '../../../styles/components/Home/WhyOurCustomerChooseUs/Reason.module.css'
import { FaAngleDown } from 'react-icons/fa'

const Reason = ({ Icon, title, description }) => {

    const [active, setActive] = useState(false)

    const handleClick = () => setActive(!active)

    return (
        <article className={styles.container + (active ? (' ' + styles.active) : '')}
            onClick={handleClick}
        >
            <div className={styles.icon}>
                <Icon />
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p className={styles.spoiler + (active ? (' ' + styles.active) : '')}>{description}</p>
            </div>
            <div className={styles.arrow + (active ? (' ' + styles.active) : '')}>
                <FaAngleDown />
            </div>
        </article>
    )
}

export default Reason