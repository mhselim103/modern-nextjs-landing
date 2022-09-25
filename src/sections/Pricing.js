import React, { useState } from "react";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  const [monthly, setMonthly] = useState(true);
  return (
    <div className="my-20 max-w-[1110px] mx-auto" id="pricing">
      <div className="flex flex-col items-center justify-center gap-4 ">
        <h1 className="font-medium uppercase text-custom">Pricing Plan</h1>
        <h1 className="text-4xl font-bold text-heading">
          Choose Your Pricing Policy
        </h1>
      </div>
      <div className="flex justify-center my-12">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 bg-[#F7F8FB] max-w-[306px]  justify-center ">
          <li className="">
            <div
              className={`inline-block p-4  rounded-t-lg  cursor-pointer text-base ${
                monthly ? "active text-blue-600  bg-white shadow-lg" : ""
              }`}
              onClick={() => setMonthly(true)}
            >
              Monthly Plan
            </div>
          </li>
          <li className="">
            <div
              className={`inline-block p-4 rounded-t-lg   cursor-pointer text-base ${
                !monthly ? "active text-blue-600 bg-white shadow-lg" : ""
              }`}
              onClick={() => setMonthly(false)}
            >
              Annual Plan
            </div>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
        {monthly &&
          packages.monthly.map((data) => (
            <PricingCard key={data.id} data={data} />
          ))}

        {!monthly &&
          packages.annual.map((data) => (
            <PricingCard key={data.id} data={data} />
          ))}
      </div>
    </div>
  );
};

export default Pricing;

const packages = {
  monthly: [
    {
      id: 1,
      name: "Free Plan",
      description: "For Small teams or office",
      buttonText: "Start free trail",
      priceWithUnit: "$0",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Drag & Drop Builder",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Blog Support Tools",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCloseCircle />,
          text: "eCommerce Store ",
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: "Business king",
      description: "For Enterprise business",
      priceWithUnit: "$15",
      buttonText: "Create account",
      anotherOption: "Or Start 14 Days trail",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Drag & Drop Builder",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Blog Support Tools",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "eCommerce Store ",
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: "Suggested",
      headerIcon: <IoIosCheckmarkCircle />,
      name: "Pro Master",
      description: "For pro level developers",
      priceWithUnit: "$24",
      buttonText: "Create account",
      anotherOption: "Or Start 14 Days trail",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Drag & Drop Builder",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Blog Support Tools",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "eCommerce Store ",
          isAvailable: true,
        },
      ],
    },
  ],
  annual: [
    {
      id: 1,
      name: "Free Plan",
      description: "For Small teams or office",
      buttonText: "Start free trail",
      priceWithUnit: "$0",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Drag & Drop Builder",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Blog Support Tools",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCloseCircle />,
          text: "eCommerce Store ",
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: "Business king",
      description: "For Enterprise business",
      priceWithUnit: "$25",
      buttonText: "Create account",
      anotherOption: "Or Start 10 Days trail",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "eCommerce Store",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Blog Support Tools",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "Drag & Drop Builder ",
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: "Suggested",
      headerIcon: <IoIosCheckmarkCircle />,
      name: "Pro Master",
      description: "For pro level developers",
      priceWithUnit: "$39",
      buttonText: "Create account",
      anotherOption: "Or Start 10 Days trail",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "eCommerce Store",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Blog Support Tools",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "Drag & Drop Builder ",
          isAvailable: true,
        },
      ],
    },
  ],
};
