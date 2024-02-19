import React from "react";

function Navbar() {
  return (
    <nav className=" py-8 h-[10vh] w-full">
      <div className="flex  justify-between items-center">
        <img src="/image/Logo.svg" alt="Logo" />
        <div className="flex items-center space-x-9">
          <ul className="flex text-lg space-x-10 text-[#090f4e] ">
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Feature</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Log In</a>
            </li>
          </ul>
          <a
            href="#"
            className="ease-in-out duration-300 text-lg font-medium bg-[rgb(41,63,204)] hover:bg-opacity-70 px-12 py-3 text-white  rounded-[6px]"
          >
            Try Free
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
