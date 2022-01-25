import React from "react";
import classes from '../header/header.module.css';

const Buttons = () => {
  return (
    <div>
      <div className={classes.toLodin}>
        <button className={classes.btn}>Личный кабинет</button>
      </div>
    </div>
  );
};

export default Buttons;
