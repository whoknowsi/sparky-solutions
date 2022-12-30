import React from 'react'
import styles from '../../styles/components/About/MainSection.module.css'
import SelectServices from '../SelectServices/SelectServices'
import ImageWithBgBooble from '../ImageWithBubbleBg'

const bubbleData = {
    width: '150%',
    height: '95%',
    left: '-25%',
    bottom: '0',
    borderRadius: '50% 50% 0 0',
    background: 'linear-gradient(180deg, rgba(var(--color-primary-opacity), 0.05) 10%, transparent 100%)'
}

const MainSection = () => {
    return (
        <section className={styles.container}>
            <SelectServices />
            <div className={styles.about}>
                <div className={styles.text}>
                    <h2>
                        About <span className='underlinedWord'>Sparky Solutions</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin et lorem mollis diam iaculis efficitur.
                        Nam vel felis et libero tincidunt tempus a sed massa.
                    </p>
                    <p>
                        Donec et viverra urna. Sed ut euismod urna. Ut eu tincidunt lacus.
                        Vivamus semper lacinia ante vitae dictum. Fusce tincidunt felis mi.
                        Sed vehicula in tellus eu imperdiet. Aliquam nulla tellus, pulvinar a hendrerit nec, gravida non sem.
                    </p>
                    <p>
                        Nunc nisl est, dictum nec metus in, mattis aliquet velit. Phasellus efficitur placerat elit nec scelerisque.
                        Mauris hendrerit ante velit, quis finibus nisl tempor nec.
                        Morbi mollis nulla sed nibh ultrices, non pulvinar diam dictum.
                    </p>
                    <p>

                        Curabitur lorem velit, venenatis eu mi id, pellentesque posuere ante.
                        Maecenas non dignissim mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <ImageWithBgBooble src={`${process.env.BASE_PATH}/images/builder-construction-vest-orange-helmet-with-table.png`} imageHeight={'calc(100vh - 9.5em - 13.7em)'} {...bubbleData} />
            </div>
        </section>
    )
}

export default MainSection