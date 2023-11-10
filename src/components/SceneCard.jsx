import React from "react";

const SceneCard = ({ name, image }) => {
  return (
    <div className="w-96 h-56 bg-red-800 relative">
      <img src={image} className="m-0 object-cover h-full w-full" alt="" />
      <div className="h-20 w-full absolute bottom-0 left-0 bg-gradient-to-t from-[#000] to-transparent"></div>
      <span className="absolute bottom-4 left-6 text-white font-bold">
        {name}
      </span>
    </div>
  );
};

export default SceneCard;