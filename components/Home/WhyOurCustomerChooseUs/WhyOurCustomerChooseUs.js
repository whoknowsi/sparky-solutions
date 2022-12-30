import React from 'react'
import styles from '../../../styles/components/Home/WhyOurCustomerChooseUs/WhyOurCustomersChooseUs.module.css'
import Reason from './Reason'
import { FaBolt, FaScrewdriver, FaRegBuilding, FaBusinessTime, FaShuttleVan, FaStar } from 'react-icons/fa'

const testsReasons = [
    {
        Icon: FaBolt,
        title: 'Fast Response',
    },
    {
        Icon: FaScrewdriver,
        title: 'Qualified Proffesionals'
    },
    {
        Icon: FaRegBuilding,
        title: 'Residential & Commercial Services'
    },
    {
        Icon: FaBusinessTime,
        title: 'Available 24/7'
    },
    {
        Icon: FaShuttleVan,
        title: 'Large Coverage'
    },
    {
        Icon: FaStar,
        title: 'Excellent Reviews'
    }
]

const descriptions = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus massa, pharetra quis dolor vel, accumsan rhoncus est. Mauris venenatis erat a nunc fringilla, porttitor cursus libero mattis. Sed vel tortor odio. Sed ac augue lacus. Suspendisse gravida turpis in quam tempor, id cursus lacus euismod. Ut odio erat, vulputate vel mollis at, condimentum id sem.`

const WhyOurCustomerChooseUs = () => {
    return (
        <section className={styles.container}>
            <div className={styles.contentContainer}>
                <h2>
                    <span className='underlinedWord'>Why our</span> customers choose us
                </h2>
                <div className={styles.detailsContainer}>
                    <div className={styles.introduction}>
                        <span>
                            When you&apos;re faced with a stressful situation at home, no matter how severe the problem is, it&apos;s always best
                            to know you&apos;ve got the right people for the job - here are some of the reasons why our customers feel so
                            confident in our services, using us time and time again:
                        </span>
                    </div>
                    <div className={styles.reasonsContainer}>
                        <div className={styles.reasonsColumn}>
                            {[...testsReasons].splice(0, 3).map(({ Icon, title }) =>
                                <Reason
                                    key={title}
                                    Icon={Icon}
                                    title={title}
                                    description={descriptions}
                                />
                            )}
                        </div>
                        <div className={styles.reasonsColumn}>
                            {[...testsReasons].splice(3).map(({ Icon, title }) =>
                                <Reason
                                    key={title}
                                    Icon={Icon}
                                    title={title}
                                    description={descriptions}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyOurCustomerChooseUs