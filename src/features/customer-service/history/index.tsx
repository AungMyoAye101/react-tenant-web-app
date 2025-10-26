import { Button } from "@/components/ui/button";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export const dummyServices = [
    {
        status: "isPending",
        priorityLevel: "Low",
        category: "Complain",
        description: "Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area.",
        date: new Date("2025-10-20T09:30:00"),
    },
    {
        status: "Ongoing",
        priorityLevel: "High",
        category: "Maintance",
        description: "Air conditioning maintenance scheduled for the meeting room.Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area.",
        date: new Date("2025-10-21T11:15:00"),
    },
    {
        status: "Resolved",
        priorityLevel: "Medium",
        category: "Complain",
        description: "Billing issue resolved for customer account #4521.Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area",
        date: new Date("2025-10-19T14:45:00"),
    },
    {
        status: "isPending",
        priorityLevel: "High",
        category: "Maintance",
        description: "Generator inspection required due to noise issue.Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area.",
        date: new Date("2025-10-25T10:00:00"),
    },
    {
        status: "Ongoing",
        priorityLevel: "Low",
        category: "Other",
        description: "Updating internal documentation for service desk policies.Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area.",
        date: new Date("2025-10-24T16:30:00"),
    },
    {
        status: "Resolved",
        priorityLevel: "High",
        category: "Complain",
        description: "Resolved client complaint about delayed delivery.Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area.",
        date: new Date("2025-10-18T08:45:00"),
    },
    {
        status: "isPending",
        priorityLevel: "Medium",
        category: "Maintance",
        description: "Pending request for office lighting replacement.Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area.",
        date: new Date("2025-10-26T13:20:00"),
    },
    {
        status: "Ongoing",
        priorityLevel: "Medium",
        category: "Other",
        description: "Team working on internal software update deployment.Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area.",
        date: new Date("2025-10-22T12:00:00"),
    },
    {
        status: "Resolved",
        priorityLevel: "Low",
        category: "Maintance",
        description: "Restroom plumbing issue fixed successfully.Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area.",
        date: new Date("2025-10-23T17:40:00"),
    },
    {
        status: "isPending",
        priorityLevel: "High",
        category: "Complain",
        description: "Customer filed complaint about unresponsive support hotline.Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area.Customer reported slow internet connection in the lobby area.",
        date: new Date("2025-10-26T09:10:00"),
    },
];


const History = () => {
    return (
        <div>


            <div className="bg-white px-4 py-6 space-y-6 rounded-lg mb-4">
                <div>

                    <h4 className="font-semibold">My Service History</h4>
                    <p>
                        The status of your submitted requests
                    </p>
                </div>


                {
                    dummyServices.map((u, i) => (
                        <div key={i} className="px-4 py-6 bg-white border shadow rounded-md">
                            <div className="flex justify-between items-center mb-4">

                                <div className="flex items-center gap-4 ">
                                    <h5 className="font-semibold">
                                        {u.category}
                                    </h5>
                                    <Button size={'sm'}
                                        className={`${u.status === "Resolved" ? "bg-green-300" : u.status === "Ongoing" ? "bg-sky-300" : "bg-amber-300"} text-black`}
                                    >{u.status}</Button>
                                    <Button variant={'outline'} size={'sm'}
                                        className={`${u.priorityLevel === "High" ? "bg-red-300" : u.priorityLevel === "Medium" ? "border-amber-400" : ""} text-black`}
                                    >{u.priorityLevel}</Button>
                                </div>
                                <p className="text-sm justify-end font-semibold">{u.date.toLocaleDateString()}</p>
                            </div>
                            <p>{u.description}</p>
                        </div>
                    ))
                }
            </div>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    )
}

export default History



