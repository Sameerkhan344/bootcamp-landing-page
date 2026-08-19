import { studentFeatures } from "../../data/studentFeatures";
import { FeatureCard } from "./FeatureCard";

const Features = () => {
  return (
    <section className="relative z-10 w-full mt-10 md:mt-0 text-white py-0 md:py-24">
      <div className="px-2 lg:px-0 xl:px-20 mx-3 md:mx-10 flex flex-col items-center">
        <h2 className="lg:hidden font-clash text-2xl md:text-5xl font-semibold text-white text-center mb-14">
          Built Around Everything a Student Usually Misses
        </h2>
        <h2 className="hidden lg:flex font-clash text-2xl md:text-5xl font-semibold text-white text-center flex-col gap-2 mb-20">
          <span>Built Around Everything a Student</span>
          <span>Usually Misses</span>
        </h2>

        <div className="w-full flex flex-col gap-10">
          {studentFeatures.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
