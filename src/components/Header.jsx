import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="z-50 relative w-full h-20 bg-white flex items-center px-10 shadow-md">
      <button
        onClick={() => navigate("/")}
        className="font-extrabold text-2xl text-gray-800"
      >
        showroom <span className="text-[#00d1ff]">ai</span>
      </button>
    </header>
  );
};

export default Header;
