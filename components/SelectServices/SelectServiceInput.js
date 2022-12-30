import React, { useState } from 'react'
import styles from '../../styles/components/SelectServices/SelectServiceInput.module.css'
import Select from 'react-select'

const SelectServiceInput = ({ placeholder, options }) => {
    const [selectedOption, setSelectedOption] = useState(null)
    return (
        <div className={styles.selectServiceContainer}>
            <Select
                instanceId={placeholder}
                placeholder={placeholder}
                value={selectedOption}
                onChange={setSelectedOption}
                options={options}
            ></Select>
        </div>
    )
}

export default SelectServiceInput