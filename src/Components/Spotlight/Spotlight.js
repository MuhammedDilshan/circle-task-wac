import React from "react";
import Header from "../Header/Header";
import Style from "./Spotlight.module.scss";
import { IoIosArrowRoundUp } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { assets } from "../../Assets/Asset";
import SwiperCore from "swiper";
import { Pagination, Autoplay } from "swiper/modules";
SwiperCore.use([Pagination, Autoplay]);

function Spotlight() {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination]}
      className="mySwiper"
      loop={true}
      //   autoplay={{ delay: 3000 }}
    >
      <Header />
      <SwiperSlide>
        <div className={Style.spotlight}>
          <figure>
            <img src={assets.Background} alt="Background" />
          </figure>
          <div className="wrapper">
            <h4 data-aos="zoom-y-out">
              54 years of Elegance in Financial Services
            </h4>
            <button className={Style.enquiry}>
              Quick Enquiry <IoIosArrowRoundUp />
            </button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Style.spotlight}>
          <figure>
            <img src={assets.Background2} alt="Background" />
          </figure>
          <div className="wrapper">
            <h4 data-aos="zoom-y-out">
              54 years of sophistication in financial services.
            </h4>
            <button className={Style.enquiry}>
              Contact <IoIosArrowRoundUp />
            </button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Spotlight;
