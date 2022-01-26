import React from "react";
import SearchBtn from "../buttons/searchBtn";
import "./search.module.css";
import classes from "./search.module.css";

const Search = () => {
  return (
    <div className={classes.search}>
      <div className={classes.searchTitle}>
        Запишитесь на приём к врачу онлайн
      </div>
      <div className={classes.form}>
        <div className={classes.formBlock}>
          <div className={classes.formWrap}>
            <div className={classes.formContainer} >
              <div className={classes.form} >
                <input placeholder="Психолог" type="text" />
              </div>
              <div className={classes.form}>
                <input placeholder="Метро" type="text" />
              </div>
              <SearchBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
