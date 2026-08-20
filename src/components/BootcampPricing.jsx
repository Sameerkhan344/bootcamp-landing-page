import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { bootcampData } from "../data/bootcampData";
import Button from "./Button";

export const BootcampPricing = () => {
  return (
    <section className="relative w-full bg-black text-white py-4 md:py-20 overflow-hidden">
      <div className="px-6 lg:px-20 flex flex-col items-center">
        <h2 className="font-clash text-2xl md:text-5xl font-semibold z-10 text-white text-center flex flex-col gap-0 md:gap-2">
          <span>{bootcampData.title}</span>
        </h2>

        <div
          className="relative w-full md:w-[80%] mt-12 rounded-3xl p-4 gradient-border2 md:p-10 flex flex-col md:flex-row gap-10 md:gap-16 items-start"
          style={{
            background:
              "linear-gradient(135deg, rgb(149, 63, 255) 0%, rgb(0, 0, 0) 60%)",
          }}
        >
          <div className="flex flex-col gap-6 w-full flex-1">
            <span className="bg-white text-black text-sm font-helvetica font-medium px-5 py-1.5 rounded-full w-fit select-none">
              {bootcampData.badge}
            </span>

            <div className="flex flex-wrap items-baseline gap-3">
              <span className="font-helvetica text-5xl md:text-6xl font-semibold text-white leading-none">
                {bootcampData.price}
              </span>

              <span className="font-helvetica text-neutral-300 text-sm md:text-xl">
                {bootcampData.tax}
              </span>
            </div>

            <div className="w-full h-px bg-white/15" />

            <p className="font-helvetica text-white/80 text-sm md:text-xl leading-relaxed">
              {bootcampData.note}
            </p>

            <div>
              <Button title={bootcampData.buttonText} />
            </div>
          </div>
          <div className="flex flex-col gap-5 flex-1">
            <h3 className="font-helvatica text-2xl md:text-[1.5rem] font-bold text-white tracking-wide">
              {bootcampData.benefitsTitle}
            </h3>

            <ul className="flex flex-col gap-4">
              {bootcampData.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <IoMdCheckmarkCircleOutline />
                  <span className="font-helvetica text-white/80 text-sm md:text-base">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
