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
      <>
        <div className={classes.filter}>
          <div className={classes.filterSort}>
            <div className={classes.filterReception}>
              <button className={classes.filterButton}>В клинике</button>
              <button className={classes.filterBtns}>Онлайн</button>
              <button className={classes.filterBtn}>На дому</button>
            </div>
          </div>
          <div className={classes.filterBlock}>
            <div className={classes.filterSort}>
              <div className={classes.item}>Сортировать</div>
              <>
                <div className={classes.filterItem}>
                  <button className={classes.button}>По популярности</button>
                </div>
              </>
            </div>
            <div className={classes.filterSort}>
              <div className={classes.item}>Дата приема</div>
              <div>
                <div className={classes.filterItem}>
                  <button className={classes.button}>Расписание на все дни</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Sorting;
