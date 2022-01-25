import React from "react";
import classes from "./header.module.css";

const images = [
  {
    image: 'https://cdn.dribbble.com/users/10882/screenshots/15172621/media/cd2246d5d0f54f9a4316bd4d276764b2.png?compress=1&resize=400x300'
  }
]


const Header = ({images}) => {
  return (
    <div className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.burgerMenu}></div>
        <div className={classes.menu}>
          <div className={classes.logoBlock}>
            <img src={images} alt="image" />
          </div>
          <div className={classes.infoBlock}>
            <div className={classes.location}>
              <div className={classes.city}>Санкт-Петербург</div>
              <div className={classes.tel}>
                <a href="tel:79650033900">7 (965) 00-39-00</a>
              </div>
            </div>
          </div>
          <div className={classes.toLodin}>
            <button className={classes.btn}>Личный кабинет</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
