import React from "react";
import classes from "./header.module.css";
import images from '../../logo.svg';
import Buttons from "../buttons/Buttons";




const Header = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.burgerMenu}></div>
      <div className={classes.menu}>
        <div className={classes.logoBlock}>
          <img src={images} alt="image" />
          <div className={classes.logoName}><h2>База психологов <br /> JUNG-CONSULTATION </h2></div>
        </div>
        <div className={classes.blocks}>
          <div className={classes.infoBlock}>
            <div className={classes.city}>Санкт-Петербург</div>
            <div className={classes.tel}>
              <a className={classes.link} href="tel:79650033900">7 (965) 00-39-00</a>
            </div>
          </div>
          <Buttons />
        </div>
      </div>
    </div>
  );

  
};


export default Header;
