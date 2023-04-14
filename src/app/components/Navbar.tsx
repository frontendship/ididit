"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import AddDialog from "./AddDialog";

const Navbar = () => {
  const session = useSession();

  return (
    <nav className="flex items-center justify-between h-20 px-8 md:px-0">
      <div>
        <h1 className="text-2xl font-bold">I did it🏳️‍🌈</h1>
      </div>
      <div>
        {session.status === "unauthenticated" ? (
          <button onClick={() => signIn("github")}>Sign in with Github</button>
        ) : (
          <div>
            <div className="flex gap-3">
              <AddDialog>
                <button>Add</button>
              </AddDialog>
              <button onClick={() => signOut()}>Sign out</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
