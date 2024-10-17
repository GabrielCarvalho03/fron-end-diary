import { z } from "zod";

export const SchemaCodeUser = z.object({
  codeUser: z.string().min(6),
});

export type FormCodeUser = z.infer<typeof SchemaCodeUser>;
