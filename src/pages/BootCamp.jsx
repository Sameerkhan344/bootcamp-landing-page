import Curriculum from "../components/Curriculum";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Mentors from "../components/Mentors";
import Placement from "../components/Placement";
import Pricing from "../components/Pricing";
import Projects from "../components/Projects";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import WhyKodr from "../components/WhyKodr";
import Marquee from "../components/CompanyMarquee";
import LearningJourney from "../components/LearningJourney";
import Syllabus from "../components/Syllabus";
import Features from "../components/students-features/Features";
import Reviews from "../components/reviews/Reviews";

const BootCamp = () => {
  return (
    <>
      <main>
        <Hero />
        <Marquee />
        <WhyKodr />
        <Placement />
        <LearningJourney />
        <Syllabus />
        <Projects />
        <Features />
        <Stats />
        <Reviews />
        <Curriculum />
        <Mentors />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
    </>
  );
};

export default BootCamp;
