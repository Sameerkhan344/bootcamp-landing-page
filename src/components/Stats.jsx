import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { statsCards } from "../data/statsCards";
import cube from "../assets/images/projects-images/3dcube.webp";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const front = card.querySelector(".sc-card-front");
        const back = card.querySelector(".sc-card-back");

        gsap.set(card, {
          x: 0,
          rotationY: 0,
          transformStyle: "preserve-3d",
          willChange: "transform",
        });

        gsap.set(front, {
          rotationY: 0,
        });

        gsap.set(back, {
          rotationY: 180,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        if (index === 0) {
          tl.to([front, back], {
            borderRadius: "18px",
            duration: 1,
            ease: "none",
          });

          tl.to(card, {
            x: -20,
            duration: 1,
            ease: "none",
          });

          tl.to(card, {
            rotationY: -186,
            duration: 2,
            ease: "none",
          });
        }

        if (index === 1) {
          tl.to([front, back], {
            borderRadius: "18px",
            duration: 1,
            ease: "none",
          });

          tl.to(card, {
            x: 0,
            duration: 1,
            ease: "none",
          });

          tl.to(card, {
            rotationY: 180,
            duration: 2,
            ease: "none",
          });
        }

        if (index === 2) {
          tl.to([front, back], {
            borderRadius: "18px",
            duration: 1,
            ease: "none",
          });

          tl.to(card, {
            x: 20,
            duration: 1,
            ease: "none",
          });

          tl.to(card, {
            rotationY: 186,
            duration: 2,
            ease: "none",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#050505]">
      <div
        className="relative hidden lg:block w-full bg-[#050505]"
        style={{ height: "250vh" }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div
            style={{
              perspective: "1800px",
              perspectiveOrigin: "50% 50%",
            }}
          >
            <div
              className="
          grid
          grid-cols-3
          relative
          w-[94vw]
          lg:w-[min(1080px,88vw)]
          h-[clamp(160px,22vw,320px)]
          lg:h-[clamp(200px,31vw,500px)]
        "
            >
              {statsCards.map((card, index) => (
                <div
                  key={card.number}
                  className="relative min-w-0"
                  style={{
                    perspective: "1800px",
                  }}
                >
                  <div
                    ref={(el) => {
                      cardsRef.current[index] = el;
                    }}
                    className="absolute inset-0"
                    style={{
                      transformStyle: "preserve-3d",
                      willChange: "transform",
                    }}
                  >
                    <div
                      className="sc-card-front absolute inset-0 overflow-hidden bg-[#111] z-20"
                      style={{
                        transform: "rotateY(0deg)",
                        backfaceVisibility: "hidden",
                        borderRadius:
                          index === 0
                            ? "18px 0 0 18px"
                            : index === 2
                              ? "0 18px 18px 0"
                              : "0",
                      }}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover block"
                        draggable="false"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    <div
                      className="sc-card-back absolute inset-0 overflow-hidden z-10"
                      style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                        borderRadius:
                          index === 0
                            ? "18px 0 0 18px"
                            : index === 2
                              ? "0 18px 18px 0"
                              : "0",
                        background:
                          index === 0
                            ? "linear-gradient(145deg, rgb(207,207,207), rgb(105,105,105))"
                            : index === 1
                              ? "linear-gradient(145deg, rgb(149,63,255), rgb(89,38,153))"
                              : "linear-gradient(145deg, rgb(22,22,22), rgb(47,47,47))",
                      }}
                    >
                      <div className="absolute inset-0 flex flex-col justify-between p-[clamp(12px,2vw,26px)]">
                        <img
                          src={cube}
                          alt=""
                          className={`w-[26px] h-[26px] object-contain ${
                            index === 0 ? "brightness-0" : ""
                          }`}
                        />

                        <div
                          className={`font-clash text-[clamp(32px,5.5vw,86px)] font-bold leading-none flex items-end gap-[2px] ${
                            index === 0 ? "text-black" : "text-white"
                          }`}
                        >
                          <span>{card.number}</span>

                          <span className="text-[clamp(14px,2.1vw,34px)] font-semibold pb-[0.08em]">
                            {card.unit}
                          </span>
                        </div>

                        <div className="flex flex-col gap-1 max-w-[300px]">
                          <h3
                            className={`font-clash text-[1.35rem] font-semibold leading-[1.25] ${
                              index === 0 ? "text-black" : "text-white"
                            }`}
                          >
                            {card.title}
                          </h3>

                          <p
                            className={`font-clash text-[1.2rem] leading-[1.3] ${
                              index === 0 ? "text-black/80" : "text-white/70"
                            }`}
                          >
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:hidden flex-col gap-[14px] w-full px-5 py-10">
        {statsCards.map((card, index) => (
          <div
            key={card.number}
            className="rounded-[18px] overflow-hidden relative min-h-[220px] flex flex-col"
            style={{
              background:
                index === 0
                  ? "linear-gradient(145deg, rgb(207,207,207), rgb(105,105,105))"
                  : index === 1
                    ? "linear-gradient(145deg, rgb(149,63,255), rgb(89,38,153))"
                    : "linear-gradient(145deg, rgb(22,22,22), rgb(47,47,47))",
            }}
          >
            <div className="h-[180px] overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div
              className={`p-[18px] flex flex-col gap-[10px] ${
                index === 0 ? "text-black" : "text-white"
              }`}
            >
              <img
                src={cube}
                alt=""
                className={`w-6 h-6 ${index === 0 ? "brightness-0" : ""}`}
              />

              <div className="font-clash text-[52px] font-bold leading-none flex items-end gap-1">
                <span>{card.number}</span>

                <span className="text-[22px] font-semibold">{card.unit}</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="font-clash text-base font-semibold">
                  {card.title}
                </h3>

                <p
                  className={`font-clash text-xs ${
                    index === 0 ? "text-black/80" : "text-white/60"
                  }`}
                >
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
