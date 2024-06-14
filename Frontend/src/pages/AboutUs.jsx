import React from 'react';
import Hero from "../components/Hero";
import Biography from "../components/Biography";

const AboutUs = () => {
  return (
    <>
      <Hero title={"Learn More about us | ZeeCare Medical Institute"} imageUrl={"./about.png"} />
      <Biography imageUrl={"./whoweare.png"}/>
    </>
  )
}

export default AboutUs