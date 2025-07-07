import * as z from "zod/v4";

export const PersonalInfoSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  phone: z.string().min(1),
});
