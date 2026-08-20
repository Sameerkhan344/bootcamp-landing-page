import Button from "./Button";
import Counter from "./Counter";
import heroBg from "../assets/images/hero-images/hero_bg.webp"
import kodrTextImg from "../assets/images/hero-images/Kodr_text_small.webp"

const Hero = () => {
  return (
    <section className="min-h-screen relative w-full overflow-hidden bg-cover bg-center bg-[url('https://px.pixxo.io/sheryians/kodr_assets/Background_001.png')]">
      <div className="w-full md:w-[90%] absolute top-23 hidden md:block md:top-20 opacity-15 left-0 sm:left-5  md:left-20 lg:left-15 xl:left-20">
        <img
          className="h-full w-full"
          alt="kodr-desktop-bg-img"
          src={kodrTextImg}
        />
      </div>
      <div className="w-full absolute hidden md:block z-1 top-20 left-20">
        <img
          className="h-full w-full "
          alt="kodar-mobile-bg-img"
          src={heroBg}
        />
      </div>
      <div className="relative z-100 w-full mt-30 mb-10 items-center justify-center flex flex-col gap-2 md:gap-7">
        <div className="flex sm:hidden flex-col items-center gap-2 ">
          <h1 className=" mb-5 text-[2.6rem] text-center px-3 leading-[2.7rem]  capitalize font-semibold font-clash">
            You're Just{" "}
            <span className="text-secondary font-semibold font-clash text-shadow-glow">
              100 Days
            </span>{" "}
            Away From Becoming a <nobr>Full-Stack</nobr> Developer
          </h1>
        </div>
        <div className="hidden sm:flex flex-col items-center gap-2 ">
          <h1 className="text-3xl sm:text-4xl text-center md:text-6xl px-5 lg:text-7xl capitalize font-semibold font-clash">
            You're Just{" "}
            <span className="text-secondary font-semibold font-clash text-shadow-glow">
              100 Days
            </span>{" "}
            Away
          </h1>
          <h2 className=" max-w-4xl px-10 md:px-0 text-center text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold font-clash capitalize ">
            From Becoming a Full-Stack Developer
          </h2>
        </div>
        <p className="font-helvetica px-5 text-center text-white/60 md:text-white text-base md:text-xl capitalize">
          From debugging code to pitching products, every day is built to make
          you sharper.
        </p>
        <div className="hidden md:flex">
          <Button title="Explore Program" showArrow={true} variant="primary" />
        </div>
        <Counter />
        <div className="w-full md:hidden sm:w-auto !px-4 py-3 md:py-2 ">
          <Button
            title={"Explore Program"}
            className={"w-full"}
            showArrow={true}
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
