import { Session } from "next-auth";
import { headers } from "next/headers";
import AuthWrapper from "./AuthContext";

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch("http://localhost:3000/api/auth/session", {
    headers: {
      cookie,
    },
  });

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}

const layout = ({ children }: { children: React.ReactNode }) => {
  const session = getSession(headers().get("cookie") ?? "");

  return <AuthWrapper>{children}</AuthWrapper>;
};

export default layout;
