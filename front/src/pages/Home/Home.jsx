import HeaderInfo from '../../components/Home/headerInfo/HeaderInfo'
import Keywords from "../../components/Home/Keywords/Keywords";
import TrialBlock from "../../components/Home/Trialplatform/TrialBlock";
import { Link } from "react-router-dom";
import Opportunities from "../../components/Home/Opportunities/Opportunities";
import Rates from '../../components/Home/Rates/Rates';
import './Home.css'

const Home = () => {
  return (
    <>
      <HeaderInfo />
      <Opportunities />
      <Keywords />
      <TrialBlock />
      <Rates />

      
    </>
  );
};

export default Home;
