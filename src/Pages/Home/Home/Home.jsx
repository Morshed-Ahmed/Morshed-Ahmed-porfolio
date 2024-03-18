import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import CoreFeatures from "../CoreFeatures/CoreFeatures";
import SampleProjects from "../SampleProjects/SampleProjects";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <SampleProjects />
      <CoreFeatures />
      <Contact />
    </div>
  );
};

export default Home;
