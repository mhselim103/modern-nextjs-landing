import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  const { title, icon, description } = service;
  return (
    <div className="flex gap-3">
      <div>
        <Image src={icon} alt="icon" width={50} height={50}></Image>
      </div>
      <div>
        <h1 className="font-medium capitalize text-heading text-[15px] mb-2">
          {title}
        </h1>
        <p className="max-w-[353px]">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
