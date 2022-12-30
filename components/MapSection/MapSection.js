import Image from 'next/image'
import React from 'react'
import styles from '../../styles/components/MapSection/MapSection.module.css'
import Argentine from '../SVG/argentine'
import Spot from './Spot'
import ImageWithBgBooble from '../ImageWithBubbleBg'

const bubbleData = {
    width: '160%',
    height: '160%',
    top: '-10%',
    right: '10%',
    borderRadius: '50%',
    background: 'linear-gradient(23deg, rgba(var(--color-primary-opacity), 0.05) 10%, transparent 50%)',
    transform: 'rotate(223deg)'
}


const MapSection = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2>
                        Rapid <span className='underlinedWord'>Response</span> Installation, Repair & Maintenance Experts
                    </h2>
                    <ImageWithBgBooble className={styles.imageContainer} src={`${process.env.BASE_PATH}/images/portrait-smiling-handyman-with-tools.png`} imageHeight={'40em'} {...bubbleData} />
                    {/* <div className={styles.imageContainer}>
                        <Image src={`${process.env.BASE_PATH}/images/portrait-smiling-handyman-with-tools.png`} width='2184' height='2684' alt='a handyman with tools' />
                    </div> */}
                </div>
                <div className={styles.mapContainer}>
                    <div className={styles.map}>
                        <Argentine fill={"rgba(15, 105, 201, .2)"} />
                        <Spot name="Córdoba" color={"rgba(15, 105, 201, 1)"} left='28%' top='25%' />
                        <Spot name="Entre Ríos" color={"rgba(15, 105, 201, 1)"} left='38%' top='29%' />
                        <Spot name="Buenos Aires" color={"rgba(15, 105, 201, 1)"} left='43%' top='35%' />
                        <Spot name="Mendoza" color={"rgba(15, 105, 201, 1)"} left='15%' top='30%' />
                        <Spot name="Santa Cruz" color={"rgba(15, 105, 201, 1)"} left='12%' bottom='22%' />
                        <Spot name="Salta" color={"rgba(15, 105, 201, 1)"} left='23%' top='3%' />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default MapSection