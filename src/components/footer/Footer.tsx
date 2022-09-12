import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="w-screen text-btn font-bold h-[5vh] flex items-center justify-center text-base bg-header">
      &copy; totel 2022
    </footer>
  );
};
export default Footer;
