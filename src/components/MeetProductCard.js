import Image from "next/image";
import React from "react";

const MeetProductCard = ({ product, style }) => {
  //   console.log(product);
  return (
    <>
      {product && (
        <div
          className={`flex ${style} items-start justify-start max-w-[437px]`}
        >
          <Image
            src={product.icon}
            alt="Icon"
            width={72}
            height={72}
            // className="rounded-r-[50%]"
          />
          <div className="flex flex-col gap-4 px-4">
            <h1 className="text-lg font-medium text-heading">
              {product.title}
            </h1>
            <p className="text-gray-500 text-[15px]">{product.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MeetProductCard;
