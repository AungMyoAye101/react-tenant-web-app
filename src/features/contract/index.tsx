import { Button } from "@/components/ui/button"
import { DownloadIcon } from "lucide-react"

const Contract = () => {
    return (
        <section>
            <div className="flex justify-between items-center gap-4 ">
                <div className="max-w-sm">
                    <h4 className="font-bold">Rental Contract</h4>
                    <p className="font-semibold ">
                        View your lease agreement and contract details

                    </p>
                </div>
                <Button className="bg-primary">
                    <DownloadIcon /> Download PDF
                </Button>
            </div>

        </section>
    )
}

export default Contract