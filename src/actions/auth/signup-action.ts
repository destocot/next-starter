"use server";

import { hashPassword } from "@/lib/argon2";
import { createUser, findOneUserByEmail } from "@/queries/users";
import { SignupSchema } from "@/validators/auth";
import { flatten, safeParse } from "valibot";
import type { ValibotActionState } from "@/types";
import { redirect } from "next/navigation";

export type SignupActionState =
  | ValibotActionState<typeof SignupSchema>
  | { error: string; success: false; statusCode: 409 | 500 };

export const signupAction = async (
  prevState: SignupActionState,
  formData: FormData,
): Promise<SignupActionState> => {
  const values = Object.fromEntries(formData.entries());

  const parsedValues = safeParse(SignupSchema, values);

  if (!parsedValues.success) {
    const flattenedErrors = flatten<typeof SignupSchema>(parsedValues.issues);
    return { success: false, error: flattenedErrors, statusCode: 400 };
  }

  const email = parsedValues.output.email;

  const userExists = await findOneUserByEmail(email);

  if (userExists?.id) {
    return {
      success: false,
      error: "An account with this email already exists.",
      statusCode: 409,
    };
  }

  const hashedPassword = await hashPassword(parsedValues.output.password);

  const data = {
    email: parsedValues.output.email,
    password: hashedPassword,
  };

  try {
    const newUser = await createUser(data);
    console.log("New user created:", newUser);
  } catch (err) {
    console.error("Error:", err);

    return {
      success: false,
      error: "An error occurred while creating your account.",
      statusCode: 500,
    };
  }

  redirect("/auth/signin");
};
