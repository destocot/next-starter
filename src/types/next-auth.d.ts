import type { User as DefaultUser } from "next-auth";
import type { User } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: Omit<DefaultUser, "id"> & { id: User["id"] };
  }
}
