import { EqualApproximatelyIcon, Mail, Phone, PhoneCall, SquareUserRound } from 'lucide-react';

const contactData = [
    {
        title: 'Emergency Line for Apartment Staff',
        phone: '09 79012354',
        info: "24/7 Available",
        icon: <PhoneCall />
    },
    {
        title: 'Support Line for Apartment Owner',
        phone: '09 79012355',
        info: "Mon-Sun  9AM-6PM",
        icon: <PhoneCall />
    },
    {
        title: 'Email Support for Apartment Owner',
        phone: '09 79012356',
        info: "Response within 24h",
        icon: <Mail />
    },
]

const colors = ['border-amber-500', 'border-green-500', 'border-blue-500']
const ContactInfo = () => {
    return (
        <div className='min-w-xs max-w-sm h-fit bg-white  shadow-md px-4 py-6 rounded-xl space-y-4'>
            <div className='flex items-center gap-2'>
                <SquareUserRound />
                <h5 className='font-semibold'>Contact Us</h5>
            </div>
            {
                contactData.map((v, i) => (
                    <div className={`p-2 border  ${colors[i]} rounded-md flex items-start gap-2 shadow `}
                        key={i}>
                        <div className='mt-1'>

                            {v.icon}
                        </div>
                        <div className=''>
                            <p className='font-semibold'>{v.title}</p>
                            <p >{v.phone}</p>
                            <p >{v.info}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ContactInfo