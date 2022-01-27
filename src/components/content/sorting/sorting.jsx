import React from "react";
import "./sorting.module.css";
import classes from "./sorting.module.css";

const Sorting = () => {
  return (
    <div className={classes.listPage}>
      <div className={classes.listPageBox}>
        <article className={classes.textCont}>
          <div className={classes.topCont}>
            <h1 className={classes.topText}>Врачи-психологи</h1>
            <span className={classes.specialistic}>19 специалистов</span>
          </div>
        </article>
      </div>
      <div>
        <div className={classes.filter}>
          <div className={classes.filterSort}>
            <div filterReception>
              <button className={classes.filterBtn}>В клинике</button>
              <button className={classes.filterBtn}>Онлайн</button>
              <button className={classes.filterBtn}>На дому</button>
            </div>
          </div>
          <div className={classes.filterSort}>
            <div className={classes.item}>Сортировать</div>
            <div>
              <div className={classes.filterItem}>
                <span className={classes.span}>По популярности</span>
              </div>
            </div>
          </div>
          <div className={classes.filterSort}>
            <div className={classes.item}>Дата приема</div>
            <div>
              <div className={classes.filterItem}>
                <span className={classes.span}>Расписание на все дни</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sorting;
