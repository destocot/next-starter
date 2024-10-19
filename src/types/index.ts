import type {
  BaseIssue,
  BaseSchema,
  BaseSchemaAsync,
  FlatErrors,
} from "valibot";
import { Post, User } from "@prisma/client";

export type ValibotActionState<
  T extends
    | BaseSchema<unknown, unknown, BaseIssue<unknown>>
    | BaseSchemaAsync<unknown, unknown, BaseIssue<unknown>>,
> = { error: FlatErrors<T>; success: false; statusCode: 400 } | undefined;

// Resources
export type SelectPost = Pick<
  Post,
  "postId" | "title" | "content" | "createdAt"
>;

export type SelectUser = Pick<
  User,
  "id" | "email" | "name" | "image" | "createdAt"
>;
export type InsertUser = Pick<User, "email" | "password">;
