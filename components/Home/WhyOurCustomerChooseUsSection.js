import React from 'react'
import { FaBolt, FaScrewdriver, FaRegBuilding, FaBusinessTime, FaShuttleVan, FaStar } from 'react-icons/fa'
import SectionWithSpoilItems from '../SectionWithSpoilItems/SectionWithSpoilItems'

const reasons = [
    {
        Icon: FaBolt,
        title: 'Fast Response',
        spoil: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vestibulum tincidunt nisl ac mollis venenatis. Proin ante neque, 
            placerat in nisl sed, euismod gravida leo. In eu elit magna. 
            Sed tincidunt ex ullamcorper nisl interdum, quis ornare arcu maximus. 
            Vivamus scelerisque eros eu urna vehicula varius. In finibus lacus in nisi mattis, 
            quis porttitor quam aliquet.`
    },
    {
        Icon: FaScrewdriver,
        title: 'Qualified Proffesionals',
        spoil: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum tincidunt nisl ac mollis venenatis. Proin ante neque, 
        placerat in nisl sed, euismod gravida leo. In eu elit magna. 
        Sed tincidunt ex ullamcorper nisl interdum, quis ornare arcu maximus. 
        Vivamus scelerisque eros eu urna vehicula varius. In finibus lacus in nisi mattis, 
        quis porttitor quam aliquet.`
    },
    {
        Icon: FaRegBuilding,
        title: 'Residential & Commercial Services',
        spoil: `Nulla posuere a orci ac tincidunt. Phasellus at porta tortor. Pellentesque efficitur metus ac elit ullamcorper, 
            eleifend convallis elit pulvinar. Aliquam accumsan faucibus justo, sit amet euismod elit interdum vitae. 
            Vivamus sit amet faucibus mi. Curabitur cursus aliquet lectus sit amet laoreet. Ut euismod elit nunc, in mollis leo hendrerit ac.`
    },
    {
        Icon: FaBusinessTime,
        title: 'Available 24/7',
        spoil: `Nulla posuere a orci ac tincidunt. Phasellus at porta tortor. Pellentesque efficitur metus ac elit ullamcorper, 
            eleifend convallis elit pulvinar. Aliquam accumsan faucibus justo, sit amet euismod elit interdum vitae. 
            Vivamus sit amet faucibus mi. Curabitur cursus aliquet lectus sit amet laoreet. Ut euismod elit nunc, in mollis leo hendrerit ac.`
    },
    {
        Icon: FaShuttleVan,
        title: 'Large Coverage',
        spoil: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum tincidunt nisl ac mollis venenatis. Proin ante neque, 
        placerat in nisl sed, euismod gravida leo. In eu elit magna. 
        Sed tincidunt ex ullamcorper nisl interdum, quis ornare arcu maximus. 
        Vivamus scelerisque eros eu urna vehicula varius. In finibus lacus in nisi mattis, 
        quis porttitor quam aliquet.`
    },
    {
        Icon: FaStar,
        title: 'Excellent Reviews',
        spoil: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vestibulum tincidunt nisl ac mollis venenatis. Proin ante neque, 
            placerat in nisl sed, euismod gravida leo. In eu elit magna. 
            Sed tincidunt ex ullamcorper nisl interdum, quis ornare arcu maximus. 
            Vivamus scelerisque eros eu urna vehicula varius. In finibus lacus in nisi mattis, 
            quis porttitor quam aliquet.`
    }
]

const description = `When you're faced with a stressful situation at home, no matter how severe the problem is, 
    it's always best to know you've got the right people for the job - here are some of the reasons why our customers 
    feel so confident in our services, using us time and time again:`

const WhyOurCustomerChooseUsSection = () => {
    return (
        <SectionWithSpoilItems
            title={<><span key={'underlinedWord'} className="underlinedWord">Why Our</span> customers choose us</>}
            description={description}
            items={reasons}
            columns={2}
        />
    )
}

export default WhyOurCustomerChooseUsSection