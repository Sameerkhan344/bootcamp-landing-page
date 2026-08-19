import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hands, skills } from "../data/journeyData";

gsap.registerPlugin(ScrollTrigger);

const JourneySection = () => {
  const sectionRef = useRef(null);
  const humanHandRef = useRef(null);
  const robotHandRef = useRef(null);
  const glowRef = useRef(null);
  const progressRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 70%",
          scrub: true,
          //   markers:true
        },
      });

      tl.fromTo(
        humanHandRef.current,
        {
          x: "-55vw",
        },
        {
          x: "5vw",
          duration: 0.5,
          ease: "none",
        },
        0,
      );

      tl.fromTo(
        robotHandRef.current,
        {
          x: "55vw",
        },
        {
          x: "-5vw",
          duration: 0.5,
          ease: "none",
        },
        0,
      );

      tl.fromTo(
        glowRef.current,
        {
          scale: 0.1,
          opacity: 0,
        },
        {
          scale: 1.2,
          opacity: 1,
          duration: 0.5,
          ease: "none",
        },
        0,
      );

      tl.fromTo(
        progressRef.current,
        {
          width: "0%",
        },
        {
          width: "75%",
          duration: 0.6,
          ease: "none",
        },
        0,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[90vh] lg:h-[110vh] bg-black overflow-hidden flex flex-col justify-between py-12 md:py-16 z-10 select-none">
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] rounded-full bg-purple-900/10 blur-[100px] pointer-events-none -z-10" />

      <h2 className="font-clash text-2xl md:text-5xl font-semibold z-10 text-white text-center flex flex-col gap-0 md:gap-2">
        <span>One Journey. Every Skill That Matters.</span>
      </h2>

      <div
        ref={sectionRef}
        className="relative w-full flex-grow h-[45vh] mt-12 md:mt-24 md:h-[50vh] flex items-center justify-center pointer-events-none"
      >
        <div
          ref={humanHandRef}
          className="absolute right-1/2 top-1/2 w-[60vw] md:w-[60vw] z-11 aspect-[16/9] will-change-transform"
          style={{
            transform: "translateX(-55vw) translateY(-50%)",
          }}
        >
          <img
            src={hands[0].image}
            alt={hands[0].alt}
            className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          />
        </div>

        <div
          ref={robotHandRef}
          className="absolute left-1/2 top-1/2 w-[60vw] md:w-[60vw] z-11 aspect-[16/9] will-change-transform"
          style={{
            transform: "translateX(55vw) translateY(-50%)",
          }}
        >
          <img
            src={hands[1].image}
            alt={hands[1].alt}
            className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(114,0,255,0.25)]"
          />
        </div>

        <div
          ref={glowRef}
          className="absolute md:w-[200px] md:h-[200px] w-[100px] h-[100px] left-1/2 top-[20%] sm:top-[15%] md:top-[20%] lg:top-[25%] xl:top-[3%] pointer-events-none z-20 will-change-transform"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 184, 140, 0.95) 0%, rgba(255, 184, 140, 0.75) 12%, rgba(196, 88, 255, 0.75) 35%, rgba(135, 40, 255, 0.45) 58%, rgba(85, 0, 160, 0.18) 78%, transparent 100%)",
            filter: "blur(24px)",
            opacity: 0,
            transform: "translateX(-50%) translateY(-50%) scale(0.1)",
          }}
        />
      </div>

      <div className="w-full hidden min-[380px]:block max-w-[1100px] mx-auto px-4 md:px-12 z-20">
        <div className="relative flex justify-between items-start w-full">
          <div className="absolute left-[12.5%] right-[12.5%] top-8 md:top-10 h-[2px] bg-neutral-800 -z-10" />

          <div
            ref={progressRef}
            className="absolute left-[12.5%] top-8 md:top-10 h-[2px] bg-[#7200FF] shadow-[0_0_10px_#7200FF] -z-10"
            style={{
              width: "0%",
            }}
          />

          {skills.map((skill) => (
            <div
              key={skill.title}
              className="flex flex-col items-center text-center w-1/4 px-1 md:px-3"
            >
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-500 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0" />

                <img
                  alt={skill.alt}
                  className="w-full h-full object-contain scale-[1.3] transition-all duration-500"
                  src={skill.image}
                  loading="lazy"
                />
              </div>

              <h3 className="mt-4 font-clash text-xs md:text-2xl font-semibold">
                {skill.title}
              </h3>

              <p className="hidden md:block mt-2 font-helvetica text-[0.85rem] text-neutral-400 leading-relaxed max-w-[180px]">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
