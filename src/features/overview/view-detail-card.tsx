import { Button } from '@/components/ui/button'

const ViewDetailCard = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-white  shadow rounded-md px-4 py-6'>
            <div className='space-y-1'>
                <p>
                    Total Amount Due
                </p>
                <h3>
                    642,000 MMK
                </h3>
                <p>Due Date: October 5, 2025</p>
            </div>
            <Button size={'lg'}>View Billing Details</Button>
        </div>
    )
}

export default ViewDetailCard