import NumbersSection from "../_components/numbers-section";
import Testimonials from "../_components/testimonials";
import AboutHeroSection from "./about-us";
import OurHistorySection from "./our-history";
import WhoWeAreSection from "./who-we-are";
import Carousel from "../_components/carousel";
import MeetTheTeamSection from "./meet-the-team";
import TimelineSection from "./timeline-section";

const AboutPage = () => {
  return (
    <div>
  <AboutHeroSection/>
 <WhoWeAreSection/>
 <NumbersSection/>
 <OurHistorySection/>
 <TimelineSection/>
 <MeetTheTeamSection/>
<Testimonials/>
<Carousel/>

 
  </div>
  
  )
  
};

export default AboutPage;