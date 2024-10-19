import { notFound, redirect } from "next/navigation";

import { Container } from "@/components/layout/container";
import { SignoutButton } from "@/components/custom-buttons/signout-button";
import { findOneUser } from "@/queries/users";
import { MyClientComponent } from "./my-client-component";
import auth from "@/lib/auth";

export default async function Page() {
  const session = await auth();
  if (!session?.user) redirect("/auth/signin");

  const user = await findOneUser(session.user.id);
  if (!user) notFound();

  console.log(user);

  return (
    <main className="mt-8">
      <Container>
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <SignoutButton size="sm" />
          </div>

          <div className="space-y-2">
            <div>
              <span className="font-semibold">User ID:</span> {user.id}
            </div>
            <div>
              <span className="font-semibold">Email:</span> {user.email}
            </div>
            <div>
              <span className="font-semibold">Account Created:</span>{" "}
              {new Date(user.createdAt).toLocaleString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">
              Client Session
            </h2>
            <MyClientComponent />
          </div>
        </div>
      </Container>
    </main>
  );
}
