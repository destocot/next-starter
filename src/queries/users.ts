import { db } from "@/lib/db";
import type { InsertUser } from "@/types";
import type { User } from "@prisma/client";

export const createUser = async ({
  email,
  password,
}: InsertUser): Promise<Pick<User, "id">> => {
  const normalizedEmail = email.trim().toLowerCase();
  const newUser = await db.user.create({
    data: { email: normalizedEmail, password },
    select: { id: true },
  });

  return newUser;
};

export const findOneUserByEmail: {
  (
    email: string,
    options: { withPassword: true },
  ): Promise<Pick<User, "id" | "password"> | null>;
  (
    email: string,
    options?: { withPassword?: false },
  ): Promise<Pick<User, "id"> | null>;
  (
    email: string,
    options?: { withPassword?: boolean },
  ): Promise<Pick<User, "id"> | Pick<User, "id" | "password"> | null>;
} = async (email: string, options?: { withPassword?: boolean }) => {
  const normalizedEmail = email.trim().toLowerCase();
  const user = await db.user.findUnique({
    where: { email: normalizedEmail },
    select: {
      id: true,
      ...(options?.withPassword ? { password: true } : {}),
    },
  });

  return user;
};

export const findOneUser = async (
  userId: string,
): Promise<Pick<User, "id" | "email" | "createdAt"> | null> => {
  const user = await db.user.findUnique({
    where: { id: userId },
    select: { id: true, email: true, createdAt: true },
  });

  return user;
};
