import { z } from "zod";

export const registrationSchema = z.object({
  fullName: z.string().min(2, "Too short"),
  gamerTag: z.string().min(3, "Gamer tag must be at least 3 characters"),
  email: z.string().email("Invalid email"),
  gameTitle: z.string().min(1, "Required"),
});
