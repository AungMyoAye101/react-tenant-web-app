import { Button } from '@/components/ui/button'
import React from 'react'

const Billing = () => {
    return (
        <section>
            <div className="flex justify-between items-center gap-4 ">
                <div className="max-w-sm">
                    <h4 className="font-bold">My Billing</h4>
                    <p className="font-semibold ">
                        Manage your utility bills and payment history
                    </p>
                </div>
                <Button className="bg-amber-500">
                    Unpaid
                </Button>
            </div>

        </section>
    )
}

export default Billing