import { Outlet } from "react-router-dom";

import "./style.css";
const MainLayout = () => {
  return (
    <>
      {/* <div className="z-40 bg-white">
        <Header />
      </div> */}
      {/* hero */}
      <header className="z-50 relative w-full h-20 bg-slate-300 flex items-center px-10">
        <span className="font-extrabold text-2xl text-gray-800">
          showroom <span className="text-[#00d1ff]">ai</span>
        </span>
      </header>
      <Outlet />
    </>
  );
};

export default MainLayout;
