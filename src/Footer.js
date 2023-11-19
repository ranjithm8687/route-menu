import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className=" bg-slate-600">
      <p className=" p-5 text-xs text-white text-center">
        Copyrights &copy; {date.getFullYear()} . All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
