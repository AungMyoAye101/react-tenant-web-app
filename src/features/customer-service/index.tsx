import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import History from "./history"
import ServiceForm from "./serviceForm"
import ContactInfo from "./components/ContactInfo"


const CustomerService = () => {
    return (
        <section>
            <div className="max-w-sm space-y-1">
                <h4 className="font-bold">Customer Service</h4>
                <p className="font-semibold ">
                    Get help with utilities, billing, and property services

                </p>
            </div>

            <Tabs defaultValue="serviceForm">
                <TabsList>
                    <TabsTrigger value="serviceForm">Nev Request</TabsTrigger>
                    <TabsTrigger value="history">Service History</TabsTrigger>
                </TabsList>
                <div className="mt-4 flex gap-6 justify-between">
                    <ContactInfo />
                    <div className="flex-1 space-y-6">
                        <TabsContent value="serviceForm"><ServiceForm /></TabsContent>
                        <TabsContent value="history"> <History /></TabsContent>

                    </div>
                </div>

            </Tabs>
        </section>
    )
}

export default CustomerService