import React from "react";

const Nav = () => {
  return (
    <nav className="flex row justify-between py-4 ">
      <span className="font-medium text-xl border  py-2 px-4 hover:text-black text-white hover:border-black hover:bg-white bg-black cursor-pointer rounded-md ">AiToolsList</span>
      <span>
        <ul className="flex row gap-4 cursor-pointer">
        <li className="hover:font-semibold">tags</li>
          <li className="hover:font-semibold">Submit</li>
        </ul>
      </span>
    </nav>
  );
};

export default Nav;
