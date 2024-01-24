import React from "react";
import Spotlight from "../Spotlight/Spotlight";
import Count from "../Count/Count";
import Details from "../Details/Details";
import Offer from "../Offer/Offer";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="home">
      <Spotlight />
      <Count />
      <Details />
      <Offer />
      <Footer />
    </div>
  );
}

export default Home;
