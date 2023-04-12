"use client";

import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const isLoggedIn = useSession();

  return (
    <div className="h-20  items-center flex justify-between px-8">
      <div>
        <h1 className="text-2xl font-bold">I did it🏳️‍🌈</h1>
      </div>
      <div>
        {isLoggedIn.status === "unauthenticated" ? (
          <button onClick={() => signIn("github")}>Sign in with Github</button>
        ) : (
          <button onClick={() => signOut()}>Sign out</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
