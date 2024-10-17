import { z } from "zod";

export const SchemaFormInitial = z.object({
  email: z.string().email(),
  coupleName: z.string().min(5).max(50),
  titlePost: z.string().min(5).max(50),
  description: z.string().optional(),
});

export type DataFormInitial = z.infer<typeof SchemaFormInitial>;
