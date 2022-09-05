import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

type UserModalProps = {};

const UserModal: React.FC<UserModalProps> = () => {
  const { data: session } = useSession();

  return (
    <div className="w-[15rem] rounded-md p-3 flex items-center justify-center min-h-[5rem] bg-modal absolute top-[12vh] right-3 md:right-12 lg:right-36">
      {session ? (
        <button
          onClick={() => signOut()}
          className="opacity-70 hover:opacity-100 bg-red-600 w-full h-10 rounded-full text-white text-xl font-bold"
        >
          Sign out
        </button>
      ) : (
        <button
          onClick={() => signIn()}
          className="opacity-70 hover:opacity-100 bg-gradient-to-r from-btn to-btnHov w-full h-10 rounded-full text-white text-xl font-bold"
        >
          Login
        </button>
      )}
    </div>
  );
};
export default UserModal;
