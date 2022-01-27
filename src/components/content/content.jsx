import React from "react";
import classes from "./content.module.css";
import "./content.module.css";
import { GoLocation } from "react-icons/go";
import { BsPersonLinesFill } from "react-icons/bs";
import { FaRubleSign } from "react-icons/fa";
import Search from "./search";
import Sorting from "./sorting/sorting";



const Content = () => {
  return (
    <div className={classes.descr}>
      <div className={classes.descrWrapper}>
        <div className={classes.descrBlocks}>
          <div className={classes.block}>
            <div className={classes.icon}>
              <GoLocation />
            </div>
            <div className={classes.blockItem}>
              <div className={classes.title}>Lorem ipsum dolor sit amet.</div>
              <div className={classes.description}>Lorem, ipsum dolor.</div>
            </div>
          </div>
          <div className={classes.block}>
            <div className={classes.icon}>
              <BsPersonLinesFill />
            </div>
            <div className={classes.blockItem}>
              <div className={classes.title}>Lorem ipsum dolor sit amet.</div>
              <div className={classes.description}>Lorem, ipsum dolor.</div>
            </div>
          </div>
          <div className={classes.block}>
            <div className={classes.icon}>
              <FaRubleSign />
            </div>
            <div className={classes.blockItem}>
              <div className={classes.title}>Lorem ipsum dolor sit amet.</div>
              <div className={classes.description}>Lorem, ipsum dolor.</div>
            </div>
          </div>
        </div>
      </div>
      <Search />
        <Sorting />
    </div>
  );
};

export default Content;
