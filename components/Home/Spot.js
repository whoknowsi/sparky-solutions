import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import styles from '../../styles/Spot.module.css'

const Spot = ({ name, color, ...props }) => {
    return (
        <div className={styles.container} style={{ ...props }}>
            <div className={styles.bubble}>
                <span>{name}</span>
            </div>
            <FaMapMarkerAlt fill={color} />
        </div>
    )
}

export default Spot