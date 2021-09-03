import TopPreview from "./top-preview";
import ProgrammFeatures from "./programmFeatures";
import Modules from "./modules";
import AppScreenList from "./appScreenList";
import Results from "./results";
import Calculator from "./calculator";
import ContactForm from "./contactForm";
import { Up } from "./up";
import CompetencesList from "./competencesList";
import CompImage from "../assets/images/20944874_preview_rev_1.png";
import CompetenceModule from "./competenceModule";
import Price from "./price";

const Home = () => {
  return (
    <>
      <TopPreview />
      <ProgrammFeatures />
      <Modules />
      <AppScreenList />
      <Results />
      {/* <Calculator /> */}
      <Price />
    </>
  );
};

export default Home;