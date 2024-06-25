import About from "../../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import ContactUs from "../ContactUs/ContactUs";
import CoreFeatures from "../CoreFeatures/CoreFeatures";
import SampleProjects from "../SampleProjects/SampleProjects";
import SkillsTechnologies from "../SkillsTechnologies/SkillsTechnologies";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <SkillsTechnologies />
      <SampleProjects />
      <ContactUs />
      {/* <CoreFeatures /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
