import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(20, "Please share a little more detail so we can respond well."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
