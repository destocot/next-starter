import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import auth from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/signin");

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
