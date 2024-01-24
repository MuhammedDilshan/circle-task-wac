import React from "react";
import Style from "./Count.module.scss";
import { IoIosArrowRoundUp } from "react-icons/io";
import { assets } from "../../Assets/Asset";

function Count() {
  return (
    <div className={Style.count}>
      <div className={`${Style.Wrapper} wrapper`}>
        <ul>
          <li data-aos="zoom-out">
            <div className={Style.count_box}>
              <h6>8300+</h6>
              <span>Employee</span>
            </div>
            <div className={Style.arrow_box}>
              <IoIosArrowRoundUp />
              <div className={Style.image_box}>
                <img src={assets.Man} alt="Man" />
              </div>
            </div>
          </li>
          <li data-aos="zoom-out" data-aos-delay="50">
            <div className={Style.count_box}>
              <h6>73K Cr+</h6>
              <span>Turn over</span>
            </div>
            <div className={Style.arrow_box}>
              <IoIosArrowRoundUp />
              <div className={Style.image_box}>
                <img src={assets.Girl} alt="Girl" />
              </div>
            </div>
          </li>
          <li data-aos="zoom-out" data-aos-delay="80">
            <div className={Style.count_box}>
              <h6>50 Lack+</h6>
              <span>Customer</span>
            </div>
            <div className={Style.arrow_box}>
              <IoIosArrowRoundUp />
              <div className={Style.image_box}>
                <img src={assets.Cash} alt="Cash" />
              </div>
            </div>
          </li>
        </ul>
        <div className={Style.image_content}>
          <h5>670+</h5>
          <span>It is a long established </span>
          <p>
            You can now find the nearest branch of CIRCLE in your location with
            our branch locator.
          </p>
          <button className={Style.enquiry}>Read More</button>
        </div>
        <div className={Style.gradient} />
      </div>
    </div>
  );
}

export default Count;
