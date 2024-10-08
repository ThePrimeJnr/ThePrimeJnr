import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-around">
      <button className="hover:text-yellow-500">About</button>
      <button className="hover:text-yellow-500">Resume</button>
      <button className="hover:text-yellow-500">Portfolio</button>
      <button className="hover:text-yellow-500">Blog</button>
      <button className="hover:text-yellow-500">Contact</button>
    </nav>
  );
};

export default Navbar;
