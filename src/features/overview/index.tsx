import { Button } from "@/components/ui/button"
import ViewDetailCard from "./view-detail-card"
import ElectricChart from "./charts/electricChart"


const Overview = () => {
    return (
        <section>
            <div className="flex justify-between items-center gap-4 ">
                <div className="max-w-sm">
                    <h4 className="font-bold">Overview</h4>
                    <p className="font-semibold ">
                        Your utility usage and billing summary for September 2025

                    </p>
                </div>
                <Button className="bg-green-400">
                    All Payment
                </Button>
            </div>
            <ViewDetailCard />
            <ElectricChart />
        </section>
    )
}

export default Overview