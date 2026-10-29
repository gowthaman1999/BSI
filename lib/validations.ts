import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid work email"),
  company: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Please provide some details about your project timeline and scope"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

