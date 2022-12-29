import Image from 'next/image'
import React from 'react'
import styles from '../../styles/MapSection.module.css'
import Argentine from '../SVG/argentine'
import Spot from './Spot'

const MapSection = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>
                        Rapid <span className='underlinedWord'>Response</span> Installation, Repair & Maintenance Experts
                    </h2>
                    <div className={styles.imageContainer}>
                        <Image src='/images/portrait-smiling-handyman-with-tools.png' width='2184' height='2684' alt='a handyman with tools' />
                    </div>
                </div>
                <div className={styles.mapContainer}>
                    <div className={styles.map}>
                        <Argentine fill={"rgba(15, 105, 201, .2)"} />
                        <Spot name="Córdoba" color={"rgba(15, 105, 201, 1)"} right='45%' top='25%' />
                        <Spot name="Entre Ríos" color={"rgba(15, 105, 201, 1)"} right='23%' top='29%' />
                        <Spot name="Buenos Aires" color={"rgba(15, 105, 201, 1)"} right='17%' top='35%' />
                        <Spot name="Mendoza" color={"rgba(15, 105, 201, 1)"} left='17%' top='30%' />
                        <Spot name="Santa Cruz" color={"rgba(15, 105, 201, 1)"} left='17%' bottom='22%' />
                        <Spot name="Salta" color={"rgba(15, 105, 201, 1)"} left='25%' top='3%' />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default MapSection