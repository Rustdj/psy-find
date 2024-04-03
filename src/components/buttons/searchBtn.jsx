import React from "react";
import '../content/search.module.css';
import classes from '../content/search.module.css';

const SearchBtn = () => {
  return (
    <div>
      <div className={classes.buttons}>
        <button className={classes.btn}>Search</button>
      </div>
    </div>
  );
};

export default SearchBtn;
