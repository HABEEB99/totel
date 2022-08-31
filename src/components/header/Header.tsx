import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { locations } from "../../utils/locations";

import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaSearch, FaUser } from "react-icons/fa";
import { useTheme } from "next-themes";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
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

  return (
    <header
      className={`${
        scroll && "bg-header"
      } fixed top-0 z-20 w-screen h-[10vh] px-3 md:px-12 space-x-6 lg:px-36 flex items-center justify-between`}
    >
      <Link href="/" passHref>
        <div className="w-20 h-8 relative">
          <Image src="/logo.png" layout="fill" objectFit="contain" />
        </div>
      </Link>

      <div className="flex items-center justify-center space-x-4">
        <FaUser className="text-3xl  text-btn opacity-70 hover:opacity-100 cursor-pointer" />
        {toggleTheme()}
      </div>
    </header>
  );
};
export default Header;
