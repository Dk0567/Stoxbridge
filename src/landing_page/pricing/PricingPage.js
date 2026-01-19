import React from "react";
import Hero from "./Hero.js";
import Brokerage from "./Brokerage.js";
import OpenAccount from "../OpenAccount.js";

function PricingPage() {
  return (
    <div>
      <Hero />
      <OpenAccount />
      <Brokerage />
    </div>
  );
}

export default PricingPage;
