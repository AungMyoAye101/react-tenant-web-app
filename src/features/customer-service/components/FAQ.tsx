
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
const FAQ = () => {
    return (
        <Accordion
            type="single"
            collapsible
            className="bg-white px-4 py-6 space-y-6 rounded-lg shadow"
            defaultValue="item-1"
        >
            <h4>Frequenty Ask Questions</h4>
            <AccordionItem value="item-1">
                <AccordionTrigger>How do I submit a maintenance request for an issue in my room?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        Our flagship product combines cutting-edge technology with sleek
                        design. Built with premium materials, it offers unparalleled
                        performance and reliability.
                    </p>

                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>How do I report a utility outage?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        We offer worldwide shipping through trusted courier partners.
                        Standard delivery takes 3-5 business days, while express shipping
                        ensures delivery within 1-2 business days.
                    </p>

                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>When are utility bill due?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        We stand behind our products with a comprehensive 30-day return
                        policy. If you&apos;re not completely satisfied, simply return the
                        item in its original condition.
                    </p>

                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default FAQ


