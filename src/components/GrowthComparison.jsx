import { growthComparisonData } from "../data/growthComparisonData";
import circleBg from "../assets/images/growth-images/Circle_bg.webp"
const CheckIcon = () => (
  <svg
    className="w-3.5 h-3.5"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

export default function GrowthComparison() {
  const { title, cards } = growthComparisonData;

  return (
    <section className="min-h-screen w-full bg-black text-white relative overflow-hidden mt-10 md:mt-0 py-0 md:py-16 flex flex-col items-center justify-center gap-12 md:gap-16 z-10">
      <div className="z-10 w-full max-w-[1200px] px-6 flex flex-col items-center gap-12 md:gap-16">

        <h2 className="font-clash text-2xl md:text-5xl font-semibold z-10 text-white text-center flex flex-col gap-0 md:gap-2 !hidden sm:!flex">
          {title.desktop.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>

        <h2 className="font-clash text-2xl md:text-5xl font-semibold z-10 text-white text-center flex flex-col gap-0 md:gap-2 !flex sm:!hidden">
          <span>{title.mobile}</span>
        </h2>

        <div className="w-full flex flex-col lg:flex-row gap-5 md:gap-20 justify-center items-center mt-0 md:mt-4">

          {cards.map((card) => {
            const isKodr = card.type === "kodr";

            return (
              <div
                key={card.id}
                className={`relative w-full rounded-2xl p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 ${
                  isKodr
                    ? "bg-gradient-to-b from-[#421B73] to-[#000000] gradient-border purple-growth-shadow"
                    : "bg-[#141414] border border-white/40 backdrop-blur-md"
                } !z-10`}
              >
                {isKodr && (
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#7200FF]/10 blur-[50px] rounded-full pointer-events-none" />
                )}

                <div>
                  <div className="text-center mb-8 flex flex-col gap-1.5 pb-6">
                    <h3
                      className={`font-clash text-2xl md:text-4xl font-semibold uppercase ${
                        isKodr
                          ? "text-[#6FEB2C]"
                          : "text-white"
                      }`}
                    >
                      {card.title}
                    </h3>

                    <p
                      className={`font-helvetica text-xs md:text-sm font-light tracking-wide ${
                        isKodr
                          ? "text-white"
                          : "text-white"
                      }`}
                    >
                      {card.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-6">
                    {card.points.map((point, index) => {
                      const isLast = index === card.points.length - 1;

                      return (
                        <div
                          key={point.title}
                          className={`flex flex-col gap-2.5 ${
                            !isLast
                              ? "border-b border-white/[0.06] pb-6"
                              : ""
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 ${
                                isKodr
                                  ? "bg-[#6FEB2C] shadow-[0_0_10px_rgba(110,235,44,0.3)]"
                                  : "bg-white"
                              } text-black`}
                            >
                              <CheckIcon />
                            </div>

                            <h4
                              className={`font-helvetica text-xs md:text-[13px] uppercase ${
                                isKodr
                                  ? "text-white"
                                  : "text-neutral-300"
                              }`}
                            >
                              {point.title}
                            </h4>
                          </div>

                          <p
                            className={`font-helvetica text-sm md:text-[15px] ${
                              isKodr
                                ? "text-white"
                                : "text-neutral-400"
                            }`}
                          >
                            {point.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>


                {isKodr && (
                  <div className="mt-8 w-full md:w-auto flex justify-center w-full">
                    <button className="group py-3 md:py-2 px-8 rounded-full font-medium flex items-center justify-center gap-3 text-[1.1rem] md:text-lg cursor-pointer bg-gradient-to-b from-[#AC69FF] to-[#7200FF] text-white button-bordercolor hover:brightness-105 w-full md:w-auto">
                      <span>{card.button}</span>

                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="absolute hidden opacity-80 lg:flex w-full top-5 right-10">
          <img
            className="w-full"
            alt=""
            src={circleBg}
          />
        </div>

      </div>
    </section>
  );
}