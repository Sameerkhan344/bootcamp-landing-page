import Counter from "./Counter";

const Hero = () => {
  return (
    <section className="min-h-screen relative w-full overflow-hidden bg-cover bg-center bg-[url('https://px.pixxo.io/sheryians/kodr_assets/Background_001.png')]">
      <div className="w-full md:w-[90%] absolute top-23 hidden md:block md:top-20 opacity-15 left-0 sm:left-5  md:left-20 lg:left-15 xl:left-20">
        <img
          class="h-full w-full"
          alt="kodr-desktop-bg-img"
          src="https://px.pixxo.io/sheryians/kodr_assets/Kodr_text_small.png"
        />
      </div>
      <div class="w-full absolute hidden md:block z-1 top-20 left-20">
        <img
          class="h-full w-full "
          alt="kodar-mobile-bg-img"
          src="https://px.pixxo.io/sheryians/kodr_assets/hero_bg.png"
        />
      </div>
      <div class="z-100 w-full mt-30 mb-10 items-center justify-center flex flex-col gap-2 md:gap-7">
        <div class="flex sm:hidden flex-col items-center gap-2 ">
          <h1 class=" mb-5 text-[2.6rem] text-center px-3 leading-[2.7rem]  capitalize font-semibold font-clash">
            You're Just{" "}
            <span class="text-secondary font-semibold font-clash text-shadow-glow">
              100 Days
            </span>{" "}
            Away From Becoming a <nobr>Full-Stack</nobr> Developer
          </h1>
        </div>
        <div class="hidden sm:flex flex-col items-center gap-2 ">
          <h1 class="text-3xl sm:text-4xl text-center md:text-6xl px-5 lg:text-7xl capitalize font-semibold font-clash">
            You're Just{" "}
            <span class="text-secondary font-semibold font-clash text-shadow-glow">
              100 Days
            </span>{" "}
            Away
          </h1>
          <h2 class=" max-w-4xl px-10 md:px-0 text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold font-clash capitalize ">
            From Becoming a Full-Stack Developer
          </h2>
        </div>
        <p class="font-helvetica px-5 text-center text-white/60 md:text-white text-base md:text-xl capitalize">
          From debugging code to pitching products, every day is built to make
          you sharper.
        </p>
        <div>
          <button class="py-3 md:py-2 px-8 rounded-full font-medium flex items-center justify-center gap-3 text-[1.1rem] md:text-lg cursor-pointer bg-gradient-to-b from-[#AC69FF] to-[#7200FF] text-white button-bordercolor hover:brightness-105  hidden md:flex">
            <span>Explore Program</span>
            <svg
              class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              ></path>
            </svg>
          </button>
        </div>
       <Counter/>
        <div class="w-full sm:w-auto !px-4">
          <button class="py-3 md:py-2 px-8 rounded-full font-medium flex items-center justify-center gap-3 text-[1.1rem] md:text-lg cursor-pointer bg-gradient-to-b from-[#AC69FF] to-[#7200FF] text-white button-bordercolor hover:brightness-105  w-full sm:w-auto mt-5  flex md:hidden">
            <span>Explore Program</span>
            <svg
              class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <div className="z-10 mx-2 md:mx-10 lg:mx-20"></div> */
}
