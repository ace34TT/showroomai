import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const scrollToSection = () => {
    const section = document.getElementById("app-section");
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <header className="z-50 relative w-full h-20 bg-white flex justify-between items-center px-4 md:px-10 shadow-md">
      <button
        onClick={() => navigate("/")}
        className="font-extrabold md:text-2xl text-gray-800"
      >
        showroom <span className="text-[#00d1ff]">ai</span>
      </button>

      <div className="h-full flex items-center gap-2 md:gap-10">
        <button className="h-10 px-4  py-2 bg-zinc-100 text-neutral-800 font-bold rounded-xl ext-sm md:text-base">
          Login
        </button>
        <button
          className="h-10 px-4 py-2 bg-neutral-900 text-white font-bold rounded-xl text-sm md:text-base"
          onClick={scrollToSection}
        >
          Start creating
        </button>
      </div>
    </header>
  );
};

export default Header;
