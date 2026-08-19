import MarqueeModule from "react-fast-marquee";
import companyLogo from "../assets/images/companylogos.webp";
const FastMarquee = MarqueeModule.default || MarqueeModule;

const Marquee = () => {
  return (
    <div className="md:mt-20 sm:mt-0 my-5 md:my-10">
      <FastMarquee speed={100} gradient={false}>
        {[1, 2].map((item) => (
          <img
            key={item}
            src={companyLogo}
            alt="Company Logo"
            className="h-[6vh] md:h-[7vh] object-cover md:mr-16 mr-12"
          />
        ))}
      </FastMarquee>
    </div>
  );
};

export default Marquee;
