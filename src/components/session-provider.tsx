"use client";

import {
  SessionProvider as AuthSessionProvider,
  type SessionProviderProps,
} from "next-auth/react";

export const SessionProvider = ({
  children,
  ...props
}: SessionProviderProps) => {
  return <AuthSessionProvider {...props}>{children}</AuthSessionProvider>;
};
