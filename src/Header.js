import React from "react";
import Nav from "./Nav";

const Header = ({ title }) => {
  return (
    <header className=" bg-sky-700 text-white">
      <Nav title={title} />
    </header>
  );
};

Header.defaultProps = {
  title: "To Do App",
};

export default Header;
