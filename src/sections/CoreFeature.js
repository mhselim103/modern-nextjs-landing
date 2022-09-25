import Image from "next/image";
import corefeature from "../assets/feature/core-feature.svg";

const CoreFeature = () => {
  return (
    <div className="max-w-[80vw] mx-auto">
      <div className="flex flex-col-reverse justify-center gap-5 px-9 md:flex-row my-14">
        <div className="max-w-[510px] max-h-[442px] flex flex-col gap-4">
          <h1 className="text-base font-medium uppercase text-custom">
            Core features
          </h1>
          <h1 className="text-5xl font-bold text-heading ">
            Smart Jackpots that you may love this anytime & anywhere
          </h1>
          <p className="text-lg font-normal leading-10 text-gray-500">
            Get your tests delivered at let home collect sample from the victory
            of the managments that supplies best design system guidelines ever.
          </p>
          <button className="text-white btn bg-custom">Get Started</button>
        </div>
        <div>
          <Image
            src={corefeature}
            alt="core feature banner"
            width={600}
            height={450}
          />
        </div>
      </div>
    </div>
  );
};

export default CoreFeature;
