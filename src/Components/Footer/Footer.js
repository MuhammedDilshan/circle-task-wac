import React from "react";
import Style from "./Footer.module.scss";
import { assets } from "../../Assets/Asset";
function Footer() {
  return (
    <footer>
      <div className={`${Style.Wrapper} wrapper`}>
        <div className={Style.left_box}>
          <img src={assets.Logo} alt="Logo" />
          <p>© 2023 Circle Limited. All Rights Reserved | Privacy Policy</p>
        </div>
        <div className={Style.right_box}>
          <div className={Style.contct_box}>
            <span className={Style.contact}>
              Toll Free : <a href="tel:18004253455">1800 425 3455</a>
            </span>
            <span className={Style.contact}>
              Phone : <a href="tel:04872332255">0487 2332255</a>
            </span>
          </div>
          <h6>
            Designed by: <a href="https://webandcrafts.com/">Webandcrafts</a>
          </h6>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
