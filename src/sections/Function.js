import React from "react";
import FunctionCard from "../components/FunctionCard";

const functionData = [
  {
    id: 1,
    title: "Set disbursement and Instructions",
    description:
      "Get your blood tests delivered at home collect a sample from theyour blood tests.",
  },
  {
    id: 2,
    title: "Assembly retrieves funds from your account",
    description:
      "Get your blood tests delivered at home collect a sample from theyour blood tests.",
  },
  {
    id: 3,
    title: "Assembly initiates disbursement",
    description:
      "Get your blood tests delivered at home collect a sample from theyour blood tests.",
  },
  {
    id: 4,
    title: "Customer receives funds payment",
    description:
      "Get your blood tests delivered at home collect a sample from theyour blood tests.",
  },
];

const Function = () => {
  return (
    <div
      className="p-12 text-white bg-gradient-to-r from-custom via-red-400 to-pink-500 "
      id="function"
    >
      <div className="max-w-[1110px] mx-auto">
        <div className="text-center">
          <h1 className="font-medium uppercase">Whats the function</h1>
          <h1 className="text-4xl font-bold">Lets see how it works</h1>
        </div>
        <div className="grid grid-cols-2 gap-5 my-10 md:grid-cols-4 justify-items-center">
          {functionData.map((data) => (
            <FunctionCard
              key={data.id}
              id={data.id}
              title={data.title}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Function;
