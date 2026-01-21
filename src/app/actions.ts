'use server'

import { z } from 'zod';

const quoteSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    agree: z.literal("on").or(z.boolean().refine(val => val === true, "You must agree to the privacy policy")),
});

export async function submitQuote(prevState: any, formData: FormData) {
    const validatedFields = quoteSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        agree: formData.get('agree') === 'on' || formData.get('agree') === 'true',
    });

    if (!validatedFields.success) {
        return {
            success: false,
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please normalize your input.",
        };
    }

    // TODO: Implement actual email sending or database storage here.
    console.log('Quote Request Received:', validatedFields.data);

    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
        success: true,
        message: 'Thank you! Your quote request has been sent successfuly. We will contact you soon.',
    };
}
