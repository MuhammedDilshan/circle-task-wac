import React from "react";
import Style from "./Offer.module.scss";
import { IoIosArrowRoundUp } from "react-icons/io";
import { assets } from "../../Assets/Asset";

function Offer() {
  return (
    <div className={Style.offer}>
      <div className={`${Style.Wrapper} wrapper`}>
        <div className={Style.image_box}>
          <img src={assets.Image2} alt="Image2" />
          <img src={assets.Family} alt="Image" />
        </div>

        <div className={Style.content_box} data-aos="zoom-out">
          <h4>EXPLORE OUR NEW SCHEMES AND OFFERS</h4>
          <p>
            “Experience the ease of paying your loan with our online payment
            system.
          </p>
          <button className={Style.enquiry}>
            Know More <IoIosArrowRoundUp />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Offer;
