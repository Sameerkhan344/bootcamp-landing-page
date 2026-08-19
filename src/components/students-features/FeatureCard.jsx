import { MentorCard } from "./Mentor";

export const FeatureCard = ({ feature, index }) => {
  return (
    <div
      className="flex gap-8 md:gap-16 items-stretch sticky"
      style={{
        top: `${100 + index * 24}px`,
        zIndex: index + 1,
      }}
    >
      <div className="hidden xl:flex flex-col items-center relative flex-shrink-0 w-24">
        <span className="font-helvatica bg-black p-10 text-6xl lg:text-8xl font-semibold select-none leading-none tracking-tighter text-[#8749E0]">
          {feature.number}
        </span>
      </div>
      <div className="flex-grow">
        <div className="w-full bg-[#141414] border border-white/5 rounded-[1rem] p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="md:hidden mb-4">
            <span className="font-clash text-4xl font-semibold text-[#9553E6] tracking-tight">
              {feature.number}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-10 gap-6 md:gap-12 items-center">
            <div className="md:col-span-4 flex flex-col gap-3.5 justify-start items-start h-full text-left">
              <h3 className="font-clash text-2xl md:text-3xl font-semibold text-white tracking-wide leading-tight">
                {feature.title}
              </h3>

              <p className="font-apfel text-neutral-400 text-sm md:text-base font-normal leading-relaxed">
                {feature.description}
              </p>
            </div>
            <div className="md:col-span-6 w-full">
              {feature.special ? (
                <MentorCard image={feature.image} />
              ) : (
                <div className="relative w-full aspect-[1920/1156] rounded-[1rem] overflow-hidden bg-neutral-900 border border-white/[0.06]">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full scale-105 object-contain"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
