import React from "react";

import Universe from "./Universe.js";
import Footer from "../Foter";
import RightSection from "./RightSection";
import Hero from "./Heroo.js";
import LeftSection from "./LeftSection";

function ProductPage() {
  return (
    <div>
      <>
        <Hero />
        <LeftSection
          imageUrl='media/images/kite.png'
          productName='Kite'
          productiDescription='Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.'
          tryDemo=''
          lernMore=''
          googlePlay=''
          appStore=''
        />
        <RightSection
          imageUrl='media/images/Console.png'
          productName='Console'
          productiDescription='The central dashboard for your StoxBridge account. Gain insights into your trades and investments with in-depth reports and visualisations.'
          lernMore=''
        />
        <LeftSection
          imageUrl='media/images/coin.png'
          productName='Coin'
          productiDescription='Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.'
          tryDemo=''
          lernMore=''
          googlePlay=''
          appStore=''
        />
        <RightSection
          imageUrl='media/images/kiteConnect.svg'
          productName='Kite Connect API'
          productiDescription='Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.'
          lernMore=''
        />
        <LeftSection
          imageUrl='media/images/varsity.png'
          productName='Varsity mobile'
          productiDescription='An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.'
          tryDemo=''
          lernMore=''
          googlePlay=''
          appStore=''
        />
        <p className='text-center mt-5 mb-5'>
          Want to know more about our technology stack? Check out the
          StoxBridge.tech blog.
        </p>
        <Universe />
      </>
    </div>
  );
}

export default ProductPage;
