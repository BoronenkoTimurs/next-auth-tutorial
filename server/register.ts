"use server";

import { RegisterSchema } from "@/schemas";
import { z } from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const { success } = RegisterSchema.safeParse(values);

  return success
    ? { success: "Registration successful! Check email please." }
    : { error: "Invalid credentials" };
};
