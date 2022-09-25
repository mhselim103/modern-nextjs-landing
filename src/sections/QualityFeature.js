import MeetProductCard from "../components/MeetProductCard";
import { meetProduct } from "../sections/MeetProduct";
const QualityFeature = () => {
  return (
    <div className="my-44 max-w-[1113px] mx-auto" id="feature">
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm font-medium text-custom">Quality Feature</p>
        <h1 className="text-4xl font-medium text-heading">
          Amazing useful feature
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-5 px-8 mt-12 justify-items-center">
        {meetProduct.map((feature) => (
          <MeetProductCard
            key={feature.id}
            product={feature}
            style="flex-row"
            justify=""
          />
        ))}
      </div>
    </div>
  );
};

export default QualityFeature;
