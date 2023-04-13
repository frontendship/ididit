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
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Add</button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="bg-black bg-opacity-25 data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                  <Dialog.Title className="text-black m-0 text-[17px] font-medium">
                    Add
                  </Dialog.Title>
                  <Dialog.Description className="text-gray-500 mt-[10px] mb-5 text-[15px] leading-normal">
                    Choose your github repository to add.
                    <i>It must be public.</i>
                  </Dialog.Description>
                  <Dialog.Close asChild>
                    <button
                      className="text-slate-500 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full "
                      aria-label="Close"
                    >
                      <Cross2Icon />
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
            <div className="flex gap-3">
              <button onClick={() => signOut()}>Sign out</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
