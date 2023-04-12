"use client";

import { signIn, useSession } from "next-auth/react";

const List = () => {
  const session = useSession();

  console.log(session);
  return (
    <div>
      <button onClick={() => signIn()}>giris yap</button>
    </div>
  );
};

export default List;
