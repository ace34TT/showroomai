import React from "react";

const SceneCard = ({ name, image, className }) => {
  return (
    <div
      className={`w-72 h-48 xl:w-96 xl:h-56 relative cursor-pointer overflow-hidden rounded-2xl ${className}`}
    >
      <img
        src={image}
        className="m-0 object-cover h-full w-full hover:scale-105 transition-all duration-150"
        alt=""
      />
      <div className="h-20 w-full absolute bottom-0 left-0 bg-gradient-to-t from-[#000] to-transparent"></div>
      <span className="absolute bottom-4 left-6 text-white font-bold">
        {name}
      </span>
    </div>
  );
};

export default SceneCard;
