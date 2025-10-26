
import { serviceFormSchema, type serviceFormType } from "@/validation/serviceFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"


const ServiceForm = () => {
    const form = useForm<serviceFormType>({
        resolver: zodResolver(serviceFormSchema),
        defaultValues: {

            description: "",
            roomId: 'd3f8a9e2-6c4b-4f1a-9b2c-7e5a1d3c2b6f'
        },
    })

    function onSubmit(data: serviceFormType) {
        // Do something with the form values.
        console.log(data)
    }
    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-lg px-4 py-6 flex flex-col gap-4">
            <div>
                <h4 className="font-semibold">Submit New Request</h4>
                <p>Fill out the form below and we'll get back to you as soon as possible</p>
            </div>
            <FieldGroup>
                {/* Category field */}
                <Controller
                    name="category"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <Select
                                name={field.name}
                                value={field.value}
                                onValueChange={field.onChange}
                            >
                                <SelectTrigger aria-invalid={fieldState.invalid}>
                                    <SelectValue placeholder="Description..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="Complain">Complain</SelectItem>
                                        <SelectItem value="Maintance">Maintance</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* Pirority Level field */}
                <Controller
                    name="pirorityLevel"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <Select
                                name={field.name}
                                value={field.value}
                                onValueChange={field.onChange}
                            >
                                <SelectTrigger className="border-input-border-gray-400">
                                    <SelectValue placeholder="Pirority Level..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="Low">Low</SelectItem>
                                        <SelectItem value="Medium">Medium</SelectItem>
                                        <SelectItem value="High">High</SelectItem>

                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />

                {/* 
                Description Field */}
                <Controller
                    name="description"
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>

                            <textarea
                                {...field}
                                id="description"
                                aria-invalid={fieldState.invalid}
                                placeholder="Description..."
                                className="min-h-[120px] border border-gray-400 rounded p-2"
                            />
                            {fieldState.invalid && (
                                <FieldError errors={[fieldState.error]} />
                            )}
                        </Field>
                    )}
                />
            </FieldGroup>
            <Button type="submit" className="">Submit   Request</Button>
        </form>
    )
}

export default ServiceForm