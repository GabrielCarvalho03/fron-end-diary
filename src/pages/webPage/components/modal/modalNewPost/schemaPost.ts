import { z } from "zod";

export const SchemaPost = z.object({
  title: z.string().min(1).max(50),
  description: z.string().optional(),
});

export type FormDataPost = z.infer<typeof SchemaPost>;
