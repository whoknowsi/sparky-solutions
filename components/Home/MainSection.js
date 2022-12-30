import styles from '../../styles/components/Home/MainSection.module.css'
import SelectServices from '../SelectServices/SelectServices'
import Image from 'next/image'

import React from 'react'

const MainSection = () => {
    return (
        <section className={styles.container}>
            <SelectServices />
            <article className={styles.presentationContainer}>
                <div className={styles.presentation}>
                    <h2>
                        <span><span className='underlinedWord'>Professional</span> electrician services for repairs, installations & maintenance.</span>
                    </h2>
                    <h3>
                        <span>We are here for you 24/7</span>
                    </h3>
                    <p>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus aliquet orci.
                            In est risus, faucibus vel tortor eget, egestas efficitur purus. Pellentesque vehicula
                            viverra volutpat. Nam malesuada fermentum mauris, nec vehicula lectus blandit eget.
                            Sed malesuada neque et risus iaculis elementum. Ut ultrices lectus vel ante blandit sollicitudin.
                        </span>
                    </p>
                </div>
                <div className={styles.presentationIlustration}>
                    <Image src={`${process.env.BASE_PATH}/svg/presentation.svg`} alt="presentation svg" width='530' height='539' />
                </div>
            </article>
        </section>
    )
}

export default MainSection