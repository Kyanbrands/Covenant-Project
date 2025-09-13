import NumbersSection from "../_components/numbers-section";
import Testimonials from "../_components/testimonials";
import AboutHeroSection from "./_components/about-us";
import OurHistorySection from "./_components/our-history";
import WhoWeAreSection from "./_components/who-we-are";
import Carousel from "../_components/carousel";
import MeetTheTeamSection from "./_components/meet-the-team";
import TimelineSection from "./_components/timeline-section";

const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection />
      <WhoWeAreSection />
      <NumbersSection />
      <OurHistorySection />
      <TimelineSection />
      <MeetTheTeamSection />
      <Testimonials />
      <Carousel />
    </div>
  );
};

export default AboutPage;
