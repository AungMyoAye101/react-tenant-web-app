import { z } from 'zod'

export const serviceFormSchema = z.object({
    pirorityLevel: z.enum(['Low', "Medium", "High"], 'Pirority level must be one of the Low,Medium and High'),
    category: z.enum(['Complain', "Maintance", "Other"], 'Category must be one of the Complain,Maintance and Other.'),
    description: z.string("Description is required.")
        .min(10, "Decscriptiom at least must be 10 characters long."),
    roomId: z.uuid({ version: 'v4', error: 'Invalid UUID' }),
})

export type serviceFormType = z.infer<typeof serviceFormSchema>