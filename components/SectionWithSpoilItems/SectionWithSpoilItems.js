import React from 'react'
import styles from '../../styles/components/SectionWithSpoilItems/SectionWithSpoilItems.module.css'
import Item from './Item'

const SectionWithSpoilItems = ({ id, title, description, items, columns }) => {
    return (
        <section id={id ? id : ""} className={styles.container}>
            <div className={styles.contentContainer}>
                <h2>
                    {title}
                </h2>
                <div className={styles.detailsContainer}>
                    <div className={styles.introduction}>
                        <span>
                            {description}
                        </span>
                    </div>
                    <div className={styles.reasonsContainer}>
                        {
                            Array(columns).fill('').map((_, i) => {
                                return (
                                    <div key={i} className={styles.reasonsColumn}>
                                        {[...items].slice(i * Math.round(items.length / columns), (i + 1) * Math.round(items.length / columns)).map(({ Icon, title, spoil }) =>
                                            <Item
                                                key={title}
                                                Icon={Icon}
                                                title={title}
                                                spoil={spoil}
                                            />
                                        )}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionWithSpoilItems