import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-neutral-100 text-center text-neutral-800 px-10">
      <div className="container px-6 pt-6">
        <div className="mb-6 flex justify-center gap-5">
          <NavLink
            to={"/terms-of-use"}
            className={({ isActive }) =>
              isActive
                ? "text-neutral-700 hover:text-neutral-900 font-bold"
                : "hover:text-neutral-900"
            }
          >
            Terms of use
          </NavLink>
          <NavLink
            to={"/privacy-policy"}
            className={({ isActive }) =>
              isActive
                ? "text-neutral-700 hover:text-neutral-900 font-bold"
                : "hover:text-neutral-900"
            }
          >
            Privacy and Policy
          </NavLink>
        </div>
      </div>
      <div className="w-full p-4 text-center border-t border-neutral-300 ">
        © 2023 Copyright :{" "}
        <a className="text-whitehite" href="https://tw-elements.com/">
          TW elements
        </a>
      </div>
    </footer>
  );
};

export default Footer;
