import React from "react";

const PricingCard = ({ data }) => {
  const {
    name,
    description,
    buttonText,
    priceWithUnit,
    points,
    anotherOption,
  } = data;
  //   console.log(points);
  //   console.log(data);
  return (
    <div className="shadow-lg max-w-[350px] p-8 h-[420px]">
      {/* heading  */}
      <div className="flex flex-col gap-2 mb-5">
        <h1 className="text-2xl font-bold text-heading">{name}</h1>
        <p className="text-base font-medium text-gray-500">{description}</p>
      </div>
      {/* points  */}

      <div>
        <ul>
          {points.map((point, index) => (
            <div key={index} className="flex items-center gap-1 ">
              <p className={`${point.isAvailable ? "text-custom" : ""}`}>
                {point.icon}
              </p>
              <li>{point.text}</li>
            </div>
          ))}
        </ul>
      </div>
      {/* price  */}
      <div className="flex items-center justify-center my-5 text-4xl">
        <h1>{priceWithUnit}</h1>
      </div>

      <div className="flex flex-col items-center justify-center gap-1">
        <button className="btn bg-custom w-[210px] text-white font-medium">
          {buttonText}
        </button>
        <p className="font-medium text-blue-700">{anotherOption}</p>
      </div>
    </div>
  );
};

export default PricingCard;
