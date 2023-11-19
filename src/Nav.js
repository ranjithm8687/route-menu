import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Nav = ({ title }) => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className=" py-6">
      <div className="md:flex md:justify-between w-5/6 md:max-w-7xl mx-auto ">
        <div className=" flex justify-between ">
          <div>
            <Link to={"/"}>
              <span className="text-3xl font-Lato "> {title} </span>
            </Link>
          </div>
          <div onClick={openMenu} className=" md:hidden pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <div className={`md:block ${open ? "block" : "hidden"}`}>
          <ul className=" md:flex space-y-4  md:space-y-0 pt-3 md:pt-0 md:space-x-8">
            <CustomLink to={"/"}>Home</CustomLink>
            <CustomLink to={"/stateman"}>useState Hook</CustomLink>
            <CustomLink to={"/boxchangebg"}>BoxChangeBg</CustomLink>
            <CustomLink to={"/about"}>About</CustomLink>
            <CustomLink to={"/contact"}>Contact</CustomLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li
      className={` text-lg px-3 py-2 hover:rounded hover:bg-orange-600 hover:text-orange-100 transform ease-in-out duration-200 ${
        isActive ? "active" : ""
      }`}
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Nav;
