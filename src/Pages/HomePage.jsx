import React from "react";

//Components Import
import HeaderHero from "../Components/HeaderHero";
import AboutUs from '../Components/AboutUs';
import ChooseUs from '../Components/WhyChoose';

const Index = () => {
  return (
    <div>
      {/*******Header with hero section ********/}
      <HeaderHero />

      {/*******About Us section ********/}
      <AboutUs />

      {/*******Choose Us section ********/}
      <ChooseUs />

    </div>
  )
};

export default Index;
