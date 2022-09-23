import React from "react";

const FunctionCard = ({ title, id, description }) => {
  return (
    <div className="max-w-[263px] max-h-[293px]">
      <div className="bg-white rounded-[45%] w-[72px] h-[72px] flex justify-center items-center">
        <p className="font-bold  text-custom">{id}</p>
      </div>
      <h1 className="text-xl mt-[25px]">{title}</h1>
      <p className="mt-5">{description}</p>
    </div>
  );
};

export default FunctionCard;
