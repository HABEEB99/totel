import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { useTheme } from "next-themes";
import UserModal from "../modals/UserModal";
import { useAuthStore } from "../../store/authStore";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const { user, addUser, removeUser } = useAuthStore();
  const [scroll, setScroll] = useState<boolean>(false);
  const handleScroll = () => {
    window.scrollY > 0 ? setScroll(true) : setScroll(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { theme, setTheme, systemTheme } = useTheme();
  const toggleTheme = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <BsSunFill
          onClick={() => setTheme("light")}
          className="text-2xl text-yellow-300 hover:text-yellow-500 font-bold cursor-pointer"
        />
      );
    } else {
      return (
        <BsMoonFill
          onClick={() => setTheme("dark")}
          className="text-2xl text-gray-500 hover:text-gray-700 font-bold cursor-pointer"
        />
      );
    }
  };

  const [openUserModal, setOpenUserModal] = useState<boolean>(false);

  return (
    <header
      className={`${
        scroll && "bg-header"
      } fixed top-0 z-20 w-screen h-[10vh] px-3 md:px-12 space-x-6 lg:px-36 flex items-center justify-between`}
    >
      <Link href="/" passHref>
        <div className="w-20 h-8 relative cursor-pointer">
          <Image src="/logo.png" layout="fill" objectFit="contain" />
        </div>
      </Link>

      <div className="flex items-center justify-center space-x-4">
        {user ? (
          <div
            onClick={() => setOpenUserModal((prev) => !prev)}
            className="cursor-pointer flex items-center justify-center space-x-2 h-8 min-w-[3rem] opacity-80 hover:opacity-100 bg-gray-400 p-2 rounded-lg"
          >
            <div className="relative w-6 h-6 rounded-full">
              <Image
                src={user?.picture!}
                layout="fill"
                objectFit="cover"
                alt="User Picture"
                className="rounded-full"
              />
            </div>
            <span className="text-sm text-green-200 font-bold">
              {user?.userName}
            </span>
          </div>
        ) : (
          <FaUser
            onClick={() => setOpenUserModal((prev) => !prev)}
            className="text-3xl  text-btn opacity-70 hover:opacity-100 cursor-pointer"
          />
        )}
        {toggleTheme()}
      </div>

      {openUserModal && <UserModal setOpenUserModal={setOpenUserModal} />}
    </header>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
