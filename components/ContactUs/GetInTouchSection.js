import React from 'react'
import styles from '../../styles/components/ContactUs/GetInTouchSection.module.css'
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaLongArrowAltRight } from 'react-icons/fa'
import Pill from './Pill'

const GetInTouchSection = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <section className={styles.container}>
            <h2>
                Get in <span className='underlinedWord'>Touch</span>
            </h2>
            <div className={styles.formContainer}>
                <div className={styles.contactInfo}>
                    <h3>Contact Information</h3>
                    <div className={styles.pillsContainer}>
                        <Pill
                            Icon={FaPhoneAlt}
                            title={'Telephone'}
                            description={'0800 123 4567'}
                        />
                        <Pill
                            Icon={FaMapMarkerAlt}
                            title={'Address'}
                            description={'San Lorenzo 3112 Piso 1 Depto. A, Mar del Plata, Buenos Aires'}
                        />
                        <Pill
                            Icon={FaEnvelope}
                            title={'Email'}
                            description={'contact@sparkysolutions.com'}
                        />
                    </div>
                </div>
                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                >
                    <label>
                        First Name
                        <input type='text' placeholder='Who'></input>
                    </label>
                    <label>
                        Last Name
                        <input type='text' placeholder='Knows'></input>
                    </label>
                    <label>
                        Email
                        <input type='email' placeholder='whoknows@gmail.com'></input>
                    </label>
                    <label>
                        Phone
                        <input type='tel' placeholder='0123 456 7891'></input>
                    </label>
                    <label>
                        Message
                        <textarea placeholder='A nice message...'></textarea>
                    </label>
                    <div className={styles.buttonContainer}>
                        <button>
                            Submit
                            <FaLongArrowAltRight />
                        </button>

                    </div>
                </form>
            </div>

        </section>
    )
}

export default GetInTouchSection