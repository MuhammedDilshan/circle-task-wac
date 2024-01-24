import React, { useState } from "react";
import Style from "./Header.module.scss";
import { assets } from "../../Assets/Asset";
import { IoIosSearch } from "react-icons/io";
import { LiaAngleDownSolid } from "react-icons/lia";
import { IoMdMenu } from "react-icons/io";
import MobileMenu from "../MobileMenu/MobileMenu";

function Header() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const handleMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };
  console.log(isMobileMenu);
  return (
    <header className={Style.header}>
      <div className={`${Style.Wrapper} wrapper`}>
        <div className={Style.left_logo}>
          <img src={assets.Logo} alt="Logo" />
        </div>
        <ul className={Style.navbar}>
          <li>About Us</li>
          <li>
            Products & Services <LiaAngleDownSolid />
          </li>
          <li>Schemes & Offers</li>
          <li>
            More <LiaAngleDownSolid />
          </li>
          <button className={Style.search}>
            <IoIosSearch />
          </button>
          <button className={Style.payment_btn}>Pay Online</button>
          <button className={Style.menu_icon} onClick={() => handleMenu()}>
            <IoMdMenu />
          </button>
        </ul>
        <MobileMenu isMobileMenu={isMobileMenu} handleMenu={handleMenu} />
      </div>
    </header>
  );
}

export default Header;
