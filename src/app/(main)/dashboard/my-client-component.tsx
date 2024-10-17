"use client";

import { useSession } from "next-auth/react";

export const MyClientComponent = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <pre className="animate-pulse">
        {JSON.stringify({ user: { id: "..." }, expires: "..." }, null, 2)}
      </pre>
    );
  }

  return <pre>{JSON.stringify(session, null, 2)}</pre>;
};
