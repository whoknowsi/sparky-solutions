import React from 'react'
import SelectServiceInput from './SelectServiceInput'
import styles from '../../styles/components/SelectServices/SelectServices.module.css'

const testsOptions = [
    { value: 'first option', label: 'First option' },
    { value: 'second option', label: 'Second option' },
    { value: 'third option', label: 'Third option' },
    { value: 'fourth option', label: 'Fourth option' },
]

const SelectServices = () => {
    return (
        <article className={styles.container}>
            <h2>
                <span>Need an electrician?</span>
            </h2>
            <div>
                <ul>
                    <li>
                        <SelectServiceInput
                            placeholder="Electrical repairs"
                            options={testsOptions} />
                    </li>
                    <li>
                        <SelectServiceInput
                            placeholder="Electrical installations"
                            options={testsOptions} />
                    </li>
                    <li>
                        <SelectServiceInput
                            placeholder="Electrical maintenance"
                            options={testsOptions} />
                    </li>
                </ul>
            </div>
        </article>
    )
}

export default SelectServices