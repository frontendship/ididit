/**
 * This file needed because of the context api does not work at the server.
 */
"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export default function AuthWrapper({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
