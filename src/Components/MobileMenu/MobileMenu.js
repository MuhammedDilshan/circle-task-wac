import React from "react";
import Style from "./MobileMenu.module.scss";
import { LiaAngleDownSolid } from "react-icons/lia";
import { IoClose } from "react-icons/io5";

function MobileMenu({ isMobileMenu, handleMenu }) {
  return (
    <div
      className={`${isMobileMenu ? Style.MobileMenuActive : ""} ${
        Style.MobileMenu
      }`}
    >
      <div className={Style.menu_close} onClick={() => handleMenu()}>
        <IoClose />
      </div>
      <ul>
        <li>About Us</li>
        <li>
          Products & Services <LiaAngleDownSolid />
        </li>
        <li>Schemes & Offers</li>
        <li>
          More <LiaAngleDownSolid />
        </li>
        <button className={Style.payment_btn}>Pay Online</button>
      </ul>
    </div>
  );
}

export default MobileMenu;
