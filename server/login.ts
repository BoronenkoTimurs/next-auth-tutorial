"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const { success } = LoginSchema.safeParse(values);
  return success
    ? { success: "Login successful!" }
    : { error: "Invalid credentials" };
};
