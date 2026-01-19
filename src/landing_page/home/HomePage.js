import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Pricing from "./Pricing";
import Education from "./Education";

import OpenAccount from "../OpenAccount";
import Stats from "./Stats";

function HomePage() {
  return (
    <div>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </div>
  );
}

export default HomePage;
