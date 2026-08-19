import { placementData } from "../data/placementData";
import Button from "./Button";
import bgImg from "../assets/images/placement-images/Left_Titled_s.webp"

const PlacementGrid = () => {
  const { title, students, placements } = placementData;

  return (
    <section className="my-10 md:my-15 relative w-full bg-black text-white overflow-hidden flex flex-col items-center justify-center gap-12 z-10">
      <span className="absolute hidden md:flex" aria-hidden="true">
        <img
          className="w-full"
          src={bgImg}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </span>

      <div className="relative z-10 w-full px-6 md:px-20 flex flex-col items-center">
        

        <h2 className="font-clash text-2xl md:text-5xl font-semibold z-10 text-white text-center flex flex-col gap-0 md:gap-2">
          {title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>

        <div className="grid grid-cols-4 gap-6 w-full mt-12">
          {placements.map((item) => (
            <div
              key={item.image}
              className="w-full rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-auto object-contain block"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        <div className="w-full mt-12 md:mt-16 flex flex-col lg:flex-row items-center sm:items-start lg:items-center justify-between gap-8 pt-4">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-3.5">
            <img
              className="h-10 md:h-12 object-contain"
              alt=""
              src={students.icon}
              loading="lazy"
              decoding="async"
            />

            <p className="font-clash text-lg md:text-3xl font-medium text-center sm:text-left">
              <span className="text-[#6FEB2C] font-semibold">
                {students.count}
              </span>{" "}
              {students.text}
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <Button
              title="View All"
              className="w-full md:w-auto !text-sm md:!text-base !py-3 !px-6 bg-white text-black"
              showArrow={false}
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementGrid;