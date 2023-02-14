import React from "react";

const Nav = () => {
  return (
    <nav className="flex row justify-between py-4 border-b">
      <span>LOGO</span>
      <span>
        <ul className="flex row gap-4 cursor-pointer">
          <li>Tredning</li>
          <li>Deals</li>
          <li>submit</li>
        </ul>
      </span>
    </nav>
  );
};

export default Nav;
