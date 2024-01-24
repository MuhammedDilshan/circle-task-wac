import React, { useEffect } from "react";
import Style from "./Details.module.scss";
import { assets } from "../../Assets/Asset";
import { IoIosArrowRoundUp } from "react-icons/io";

function Details() {
  return (
    <div className={Style.details}>
      <div className={`${Style.Wrapper} wrapper`}>
        <div className={Style.content_box}>
          <img src={assets.Logo} alt="Logo" />
          <span>LOREM IMPSUM</span>
          <h6>LOREM FOR IPSUM living outside WORLD.</h6>
          <button className={Style.enquiry}>
            View More <IoIosArrowRoundUp />
          </button>
        </div>
        <div className={Style.cards}>
          <ul>
            <li data-aos="zoom-out">
              <h4>8.8K+</h4>
              <span>Chit</span>
              <span>subscribers</span>
            </li>
            <li
              className={Style.Light_blue}
              data-aos="zoom-out"
              data-aos-delay="80"
            >
              <h4>8.8K+</h4>
              <span>Chit</span>
              <span>subscribers</span>
            </li>
            <li
              className={Style.dark_blue}
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <h4>8.8K+</h4>
              <span>Chit</span>
              <span>subscribers</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Details;
