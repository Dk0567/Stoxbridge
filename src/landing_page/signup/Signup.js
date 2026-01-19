import React from "react";
import OpenAccount from "../OpenAccount";
import HeroSection from "./HeroSection";
import LeftSection from "./leftSection";
import RightSection from "./rightSection";

function Signup() {
  return (
    <div>
      <HeroSection />
      <LeftSection imageUrl='media/images/Accountopen.svg' />
      <RightSection imageUrl='media/images/acop-benefits.svg' />
      <OpenAccount />
    </div>
  );
}
export default Signup;
