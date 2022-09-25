import icon1 from "../assets/feature/partnership.svg";
import icon2 from "../assets/feature/performance.svg";
import icon3 from "../assets/feature/subscription.svg";
import icon4 from "../assets/feature/support.svg";
import MeetProductCard from "../components/MeetProductCard";

export const meetProduct = [
  {
    id: 1,
    icon: icon1,
    title: "Fast Performance",
    description:
      "Get your blood tests delivered athome collect a sample from theyour blood tests.",
  },
  {
    id: 2,
    icon: icon2,
    title: "Partnership deal",
    description:
      "Get your blood tests delivered athome collect a sample from theyour blood tests.",
  },
  {
    id: 3,
    icon: icon3,
    title: "Pro Subscription",
    description:
      "Get your blood tests delivered athome collect a sample from theyour blood tests.",
  },
  {
    id: 4,
    icon: icon4,
    title: "Customer Support",
    description:
      "Get your blood tests delivered athome collect a sample from theyour blood tests.",
  },
];

const MeetProduct = () => {
  return (
    <div className="max-w-[80vw] mx-auto">
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm font-medium uppercase text-custom ">
          Whats the function
        </p>
        <h1 className="text-4xl font-medium text-heading">
          Meet the feature of product
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-5 mt-20 md:grid-cols-4">
        {meetProduct?.map((product) => (
          <MeetProductCard
            key={product.id}
            product={product}
            style="flex-col"
          />
        ))}
      </div>
    </div>
  );
};

export default MeetProduct;
