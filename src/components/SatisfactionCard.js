import Image from "next/image";
import React from "react";

const SatisfactionCard = ({ data }) => {
  const { id, title, description, avatar, name, designation, review } = data;
  return (
    <div className="flex flex-col justify-start gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="font-medium text-heading">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="flex gap-3">
        <div>
          <Image alt="profile-img" src={avatar} width={55} height={55} />
        </div>
        <div>
          <h3>{name}</h3>
          <p>{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default SatisfactionCard;
