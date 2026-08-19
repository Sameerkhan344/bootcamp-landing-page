import MarqueeModule from "react-fast-marquee";

const FastMarquee = MarqueeModule.default || MarqueeModule;

const Marquee = () => {
  return (
    <div className="mt-20 sm:mt-0 my-10">
      <FastMarquee speed={100} gradient={false}>
        {[1, 2].map((item) => (
          <img
            key={item}
            src="https://dfdx9u0psdezh.cloudfront.net/logos/companylogos.webp"
            alt="Company Logo"
            className="h-[4vh] md:h-[7vh] object-cover md:mr-16 mr-12"
          />
        ))}
      </FastMarquee>
    </div>
  );
};

export default Marquee;
