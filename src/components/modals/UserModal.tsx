import React from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useAuthStore } from "../../store/authStore";
import { createOrGetUser } from "../../utils/createOrGetUser";

type UserModalProps = {
  setOpenUserModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserModal: React.FC<UserModalProps> = ({ setOpenUserModal }) => {
  const { user, addUser, removeUser } = useAuthStore();

  const handleLogout = () => {
    googleLogout();
    removeUser();
    setOpenUserModal((prev) => !prev);
  };

  return (
    <div className="w-[15rem] rounded-md p-3 flex items-center justify-center min-h-[5rem] bg-modal absolute top-[12vh] right-3 md:right-12 lg:right-36">
      {user ? (
        <button
          onClick={handleLogout}
          className="opacity-70 hover:opacity-100 bg-red-600 w-full h-10 rounded-full text-white text-xl font-bold"
        >
          Sign out
        </button>
      ) : (
        <div onClick={() => setOpenUserModal(false)}>
          <GoogleLogin
            onSuccess={(response) => {
              createOrGetUser(response, addUser);
            }}
            onError={() => console.log("An Error occured")}
          />
        </div>
      )}
    </div>
  );
};
export default UserModal;
