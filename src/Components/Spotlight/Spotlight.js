import React from "react";
import Header from "../Header/Header";
import Style from "./Spotlight.module.scss";
import { IoIosArrowRoundUp } from "react-icons/io";

function Spotlight() {
  return (
    <div className={Style.spotlight}>
      <div className="wrapper">
        <Header />
        <h4 data-aos="zoom-y-out">
          54 years of Elegance in Financial Services
        </h4>
        <button className={Style.enquiry}>
          Quick Enquiry <IoIosArrowRoundUp />
        </button>
      </div>
    </div>
  );
}

export default Spotlight;
