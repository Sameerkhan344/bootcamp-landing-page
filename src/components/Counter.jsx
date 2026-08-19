import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { counterData } from "../data/counterData";

gsap.registerPlugin(ScrollTrigger);

const Counter = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray(".counter-number");

      counters.forEach((element, index) => {
        const item = counterData[index];

        const obj = {
          value: 0,
        };

        gsap.to(obj, {
          value: item.value,
          duration: 2,
          ease: "power2.out",

          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 95%",
            once: true,
          },

          onUpdate: () => {
            element.textContent = obj.value.toFixed(item.decimals);
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="counter-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-10 w-full px-4 sm:px-8 md:px-10 gap-y-4 gap-x-5"
    >
      {counterData.map((item) => (
        <div key={item.label} className="relative gradient-border rounded-2xl">
          <div className="w-full h-full rounded-2xl bg-black/20 px-6 py-4 flex justify-between gap-4">
            <div className="flex flex-col justify-start">
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <h2 className="counter-number text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-clash tracking-tight bg-gradient-to-b from-white via-white/95 to-[#A3A3A3] bg-clip-text text-transparent">
                  0
                </h2>
                <span className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-medium font-clash bg-gradient-to-b from-[#E5E5E5] to-[#737373] bg-clip-text text-transparent">
                  {item.suffix}
                </span>

              </div>

              <p className="mt-1 text-sm md:text-[1rem] font-normal text-white/80 font-helvetica leading-tight">
                {item.label}
              </p>
            </div>

            <div className="w-14 h-14 sm:w-12 sm:h-12 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center self-end">
              <img
                src={item.icon}
                alt={item.label}
                className="w-full h-full object-contain opacity-90"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
