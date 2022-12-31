import React from 'react'
import SectionWithSpoilItems from '../SectionWithSpoilItems/SectionWithSpoilItems'
import { FaBolt, FaScrewdriver, FaRegBuilding } from 'react-icons/fa'

const services = [
    {
        Icon: FaBolt,
        title: 'Repairs',
        spoil: `Nulla posuere a orci ac tincidunt. Phasellus at porta tortor. Pellentesque efficitur metus ac elit ullamcorper, 
            eleifend convallis elit pulvinar. Aliquam accumsan faucibus justo, sit amet euismod elit interdum vitae. 
            Vivamus sit amet faucibus mi. Curabitur cursus aliquet lectus sit amet laoreet. Ut euismod elit nunc, in mollis leo hendrerit ac.`
    },
    {
        Icon: FaScrewdriver,
        title: 'Installations',
        spoil: `Ut accumsan leo sed magna porta accumsan. Donec auctor arcu in ultricies vestibulum. 
            Quisque efficitur porta nisl sed ultrices. Vivamus venenatis odio nulla, quis molestie justo bibendum et. 
            Vivamus accumsan lacinia erat, nec facilisis nisl gravida non. 
            Aliquam interdum tortor dapibus, ultrices neque sollicitudin, tempor justo.`
    },
    {
        Icon: FaRegBuilding,
        title: 'Maintenance',
        spoil: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vestibulum tincidunt nisl ac mollis venenatis. Proin ante neque, 
            placerat in nisl sed, euismod gravida leo. In eu elit magna. 
            Sed tincidunt ex ullamcorper nisl interdum, quis ornare arcu maximus. 
            Vivamus scelerisque eros eu urna vehicula varius. In finibus lacus in nisi mattis, 
            quis porttitor quam aliquet.`
    }
]

const description = `We offer 3 different types of services throughout Argentina, both commercial and domestic. These include:`

const OurServicesSection = () => {
    return (
        <SectionWithSpoilItems
            title={<>Our <span key={'underlinedWord'} className="underlinedWord">Services</span></>}
            description={description}
            items={services}
            columns={3}
        />
    )
}

export default OurServicesSection