import Image from "next/image";
import banner from "../assets/banner-thumb.png";

const Hero = () => {
  return (
    <div className="max-w-[80vw] mx-auto" id="home">
      <div className="flex flex-col items-center justify-center hero">
        <h1 className="font-bold text-center text-4xl md:text-7xl max-w-[814px] mx-auto text-[#0F2137] mt-28">
          Top Quality Digital Products To Explore
        </h1>
        <p className="max-w-lg mx-auto text-lg leading-8 text-center text-[#02073E] mt-7">
          Get your blood tests delivered at let home collect sample from the
          victory of the managments that supplies best design system guidelines
          ever.
        </p>
        <button className="my-8 text-center text-white action-btn ">
          Explore
        </button>

        <div className="">
          <Image
            src={banner}
            width={1000}
            height={700}
            alt="banner"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
