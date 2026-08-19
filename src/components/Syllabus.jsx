import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { syllabusData } from "../data/syllabusData";
import { CodeXml } from "lucide-react";
import Button from "./Button";

const Syllabus = () => {
  const [activeModule, setActiveModule] = useState(0);

  const cardRef = useRef(null);

  const activeData = syllabusData[activeModule];

  const handleModuleChange = (index) => {
    if (index === activeModule) return;

    setActiveModule(index);
  };

  useLayoutEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 25,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
        },
      );
    }, cardRef);

    return () => ctx.revert();
  }, [activeModule]);

  return (
    <section
      id="syllabus"
      className="relative w-full bg-white text-black py-10 md:py-20"
    >
      <div className="px-4 md:px-12 flex flex-col items-center">
        <h2 className="font-clash text-2xl md:text-5xl font-semibold z-10 text-black text-center">
          Why You Need To Become A Developer
        </h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-10 mt-12 md:mt-20 relative items-start">
          <div className="md:hidden top-[70px] bg-white/95 backdrop-blur-md z-30 flex gap-3 overflow-x-auto py-4 px-2 -mx-4 scrollbar-none border-b border-neutral-100 shadow-sm">
            {syllabusData.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleModuleChange(index)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border flex-shrink-0 text-xs font-semibold transition-all duration-350 cursor-pointer ${
                  activeModule === index
                    ? "bg-[#ECE6FF] border-[#7200FF]/30 text-[#4C00B0]"
                    : "bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                    activeModule === index
                      ? "bg-[#7200FF] text-white"
                      : "bg-neutral-100 text-neutral-400"
                  }`}
                >
                  <CodeXml size={16} />
                </div>

                <span>{item.shortTitle}</span>
              </button>
            ))}
          </div>

          <div className="hidden md:flex md:col-span-4 flex-col gap-4 sticky top-20 select-none self-start">
            {syllabusData.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleModuleChange(index)}
                className={`flex items-center gap-3.5 px-5 py-4 w-full rounded-2xl border text-left transition-all duration-350 cursor-pointer hover:-translate-y-[1px] active:scale-[0.99] ${
                  activeModule === index
                    ? "bg-[#ECE6FF] border-[#9553E6]/20 border-l-4 border-l-[#9553E6] shadow-sm text-[#4C00B0] font-semibold"
                    : "bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all flex-shrink-0 ${
                    activeModule === index
                      ? "bg-[#9553E6] text-white shadow-md shadow-[#7200FF]/25"
                      : "bg-neutral-400 text-white"
                  }`}
                >
                  <CodeXml size={16} />
                </div>

                <span className="font-clash font-semibold text-black text-sm md:text-[1rem]">
                  {item.title}
                </span>
              </button>
            ))}
          </div>

          <div className="col-span-1 md:col-span-8 w-full min-h-[500px]">
            <div
              ref={cardRef}
              className="w-full rounded-[1rem] bg-gradient-to-br from-[#9553E6] to-[#260A49] text-white p-6 md:p-10 shadow-2xl relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 border-b border-white/10 pb-8 relative z-10">
                <div className="flex-1">
                  <span className="bg-white text-black text-lg font-helvetica font-medium px-10 py-1.5 rounded-2xl inline-block shadow-md">
                    {activeData.module}
                  </span>

                  <h3 className="text-2xl md:text-5xl font-clash font-semibold text-white mt-5">
                    {activeData.title}
                  </h3>

                  <p className="text-neutral-200 font-helvetica text-lg md:text-lg leading-relaxed mt-4 max-w-xl">
                    {activeData.description}
                  </p>
                </div>

                <div className="flex gap-8 lg:mt-2 flex-shrink-0">
                  <div>
                    <span className="block text-3xl md:text-4xl font-clash font-bold">
                      {activeData.projects}
                    </span>

                    <span className="text-[30px] md:text-[20px] text-neutral-300 block mt-0.5">
                      Projects
                    </span>
                  </div>

                  <div className="h-10 bg-white/20 self-center" />

                  <div>
                    <span className="block text-3xl md:text-4xl font-clash font-bold">
                      {activeData.months}
                    </span>

                    <span className="text-[30px] md:text-[20px] text-neutral-300 block mt-0.5">
                      Months
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 relative z-10">
                <span className="text-[15px] md:text-lg text-neutral-300 tracking-widest font-semibold uppercase mb-6 block">
                  What You'll Learn
                </span>

                <div className="flex flex-col gap-8 md:gap-10">
                  {activeData.topics.map((topic) => (
                    <div key={topic.number} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-white font-apfel font-bold text-black flex items-center justify-center font-semibold text-[1rem] flex-shrink-0 shadow-sm mt-0.5">
                        {topic.number}
                      </div>

                      <div className="flex-1">
                        <h4 className="text-2xl md:text-2xl font-apfel font-medium text-white mb-4">
                          {topic.title}
                        </h4>

                        <ul className="space-y-3">
                          {topic.points.map((point, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2.5 text-neutral-200 text-[1.2rem] md:text-[1rem]"
                            >
                              <span className="text-[#A855F7] mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-2xl bg-current shadow-[0_0_6px_#A855F7]" />

                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex w-full flex-wrap items-center gap-4 mt-10 pt-6 border-t border-white/10 relative z-10">
                <Button title="Apply Now" />
                <Button title="View Syllabus" variant="secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Syllabus;
