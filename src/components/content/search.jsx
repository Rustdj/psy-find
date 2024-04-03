import React from "react";
import SearchBtn from "../buttons/SearchBtn";
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
            <div className={classes.formContainer}>
              <div className={classes.form}>
                <input
                  className={classes.formInput}
                  required
                  type="text"
                />
                <label className={classes.labelPsy}>Психолог</label>
              </div>
              <div className={classes.form}>
                <input
                  className={classes.formInput}
                  required
                  type="text"
                />
                <label className={classes.label}>Метро</label>
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
