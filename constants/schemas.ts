import * as z from "zod";

export const formSchema = z.object({
  location: z
    .string()
    .min(2, { message: "Please provide a location" })
    .max(50, { message: "Location is too long" }),
  dates: z.object({
    from: z.date({ required_error: "Please select a check-in date" }),
    to: z.date({ required_error: "Please select a check-out date" }),
  }),
  adults: z
    .string()
    .min(1, { message: "Min 1 adult" })
    .max(12, { message: "Max 12 adults" }),
  children: z.string().min(0).max(12, { message: "Maximum 12 children" }),
  rooms: z.string().min(1, { message: "Min 1 room" }),
});
