import * as z from "zod/v4";

export const PersonalInfoSchema = z.object({
  name: z.string().min(1, "This field is required"),
  email: z.email("Invalid email").min(1, "This field is required"),
  phone: z.string("Invalid phone").min(1, "This field is required"),
});
