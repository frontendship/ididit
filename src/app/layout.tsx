import { Session } from "next-auth";
import "./globals.css";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import AuthWrappers from "./AuthContext";
import Navbar from "./components/Navbar";
import CommonProvider from "./CommonProvider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const inter = Inter({
  subsets: ["latin"],
});

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch("http://localhost:3000/api/auth/session", {
    headers: {
      cookie,
    },
  });

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession(headers().get("cookie") ?? "");

  return (
    <html lang="en" className={inter.className}>
      <body className="bg-slate-900 text-white">
        <AuthWrappers session={session}>
          <CommonProvider>
            <div className="container mx-auto h-screen">
              <Navbar />
              {children}
            </div>
          </CommonProvider>
        </AuthWrappers>
      </body>
    </html>
  );
}
