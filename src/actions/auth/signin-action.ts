"use server";

import { flatten, safeParse } from "valibot";
import { SigninSchema } from "@/validators/auth";
import { signIn } from "@/auth";
import { ValibotActionState } from "@/types";

export type SigninActionState =
  | ValibotActionState<typeof SigninSchema>
  | { error: string; success: false; statusCode: 500 }
  | { error: null; success: true; statusCode: 200 };

export const signinAction = async (
  prevState: SigninActionState,
  formData: FormData,
): Promise<SigninActionState> => {
  const values = Object.fromEntries(formData.entries());

  const parsedValues = safeParse(SigninSchema, values);

  if (!parsedValues.success) {
    const flattenedErrors = flatten<typeof SigninSchema>(parsedValues.issues);
    return { success: false, error: flattenedErrors, statusCode: 400 };
  }

  try {
    await signIn("credentials", { ...parsedValues.output, redirect: false });
    return { success: true, error: null, statusCode: 200 };
  } catch (err) {
    return {
      success: false,
      error: "Oops! Something went wrong.",
      statusCode: 500,
    };
  }
};
