/**
 * This file needed because of the context api does not work at the server.
 */
"use client";

import { SessionProvider } from "next-auth/react";

export default function AuthWrappers({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
