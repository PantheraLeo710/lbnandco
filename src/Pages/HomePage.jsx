import React from "react";

//Components Import
import HeaderHero from "../Components/HeaderHero";
import AboutUs from '../Components/AboutUs';
import ChooseUs from '../Components/WhyChoose';
import Menu from '../Components/Menu';
import Products from '../Components/Products';
import IntroSection from '../Components/IntroSection';
import Contact from '../Components/Contact';

const Index = () => {
  return (
    <div>
      {/*******Header with hero section ********/}
      <HeaderHero />

      {/*******Header with hero section ********/}
      <IntroSection />

      {/*******About Us section ********/}
      <AboutUs />

      {/*******Choose Us section ********/}
      <ChooseUs />

      {/*******Products section ********/}
      <Products />

      {/*******Menu section ********/}
      <Menu />

      {/*******Menu section ********/}
      <Contact />

    </div>
  )
};

export default Index;
