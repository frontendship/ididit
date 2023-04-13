"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

const Navbar = () => {
  const session = useSession();

  return (
    <nav className="h-20  items-center flex justify-between md:px-0 px-8">
      <div>
        <h1 className="text-2xl font-bold">I did it🏳️‍🌈</h1>
      </div>
      <div>
        {session.status === "unauthenticated" ? (
          <button onClick={() => signIn("github")}>Sign in with Github</button>
        ) : (
          <div>
            <div className="flex gap-3">
              <button>
                Add
                {/* TODO: use radix dialog */}
              </button>
              <button onClick={() => signOut()}>Sign out</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
