import React from "react";

const SectionHeading = ({ title, subtitle, size, slogan, color }) => {
  console.log(size);
  return (
    <div>
      {slogan && <p className="text-sm text-[#EA3A60]">{slogan}</p>}
      <h1 className={`text-[${size}] text-[${color}] text-center`}>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
