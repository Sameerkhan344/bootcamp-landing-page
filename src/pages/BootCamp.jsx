import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import Placement from "../components/Placement";
import { BootcampPricing } from "../components/BootcampPricing";
import Projects from "../components/Projects";
import Stats from "../components/Stats";
import WhyKodr from "../components/WhyKodr";
import CompanyMarquee from "../components/CompanyMarquee";
import LearningJourney from "../components/LearningJourney";
import Syllabus from "../components/Syllabus";
import Features from "../components/students-features/Features";
import Reviews from "../components/reviews/Reviews";
import { Instructors } from "../components/instructor/Instructors";
import GrowthComparison from "../components/GrowthComparison";

const BootCamp = () => {
  return (
    <>
      <main>
        <Hero />
        <CompanyMarquee />
        <WhyKodr />
        <GrowthComparison/>
        <Placement />
        <LearningJourney />
        <Syllabus />
        <Projects />
        <Features />
        <Stats />
        <div className="relative overflow-hidden">
        <Reviews />
        <Instructors />
        </div>
        <BootcampPricing />
        <FAQ />
      </main>
    </>
  );
};

export default BootCamp;
