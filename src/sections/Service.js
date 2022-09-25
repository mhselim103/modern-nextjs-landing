import Image from "next/image";
import serviceBanner from "../assets/service-thumb.png";
import icon from "../assets/services/smart.svg";
import icon2 from "../assets/services/secure.svg";
import ServiceCard from "../components/ServiceCard";

const serviceData = [
  {
    id: 1,
    icon: icon,
    title: "smart feature",
    description:
      "Get your blood tests delivered at let home collect sample from the victory of the managments.your blood tests.",
  },
  {
    id: 2,
    icon: icon2,
    title: "secure feature",
    description:
      "Get your blood tests delivered at let home collect sample from the victory of the managments.your blood tests.",
  },
];

const Service = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-[1382px] my-12">
      <div className="relative">
        <div className="p-4">
          <Image
            src={serviceBanner}
            width={500}
            height={400}
            alt="service Banner"
          />
        </div>
        <div className="absolute lg:left-[-123px] lg:bottom-[-44px] -z-10 hidden lg:block ">
          <Image
            src="/service-bg.svg"
            width={466}
            height={455}
            alt="shapebox"
          />
        </div>
      </div>
      <div className="p-4">
        <div>
          <h2 className="text-sm font-medium text-custom ">our services</h2>
          <h1 className="max-w-lg my-4 text-5xl font-medium text-heading ">
            Business Goals Achieved with Design
          </h1>
        </div>
        <div className="flex flex-col gap-4 py-4 mt-4">
          {serviceData.map((data) => (
            <ServiceCard key={data.id} service={data}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
