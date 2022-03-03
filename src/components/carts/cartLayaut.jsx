import React from "react";
import c from "./cart.module.css";

export default function CartLayaut() {
  return (
    <div className={c.doctorContainer}>
      <div className={c.wrapper}>
        <section className={c.pageLeft}>
          <div className={c.pageAvatar}>
            <a className={c.avatarLink} href="">
              <div className={c.avaPhoto}>
                <img src="" alt="" />
              </div>
            </a>
            <div title="Добавить врача в избранное" className={c.buttonLike}>
              <img src="" alt="" />
            </div>
          </div>
          <a className={c.starValue} href="">
            <div className={c.ratingDoctor}>
              <div className={c.ratingStars}>
                <div className={c.ratingMono}>
                  <img src="" alt="" />
                </div>
              </div>
              <div className={c.recommendations}>
                <div className={c.value}>
                    <span>81% пациентов</span>
                    <span>рекомендует врача</span>
                </div>
                <span className={c.valueLabel}>83 отзыва</span>
              </div>
            </div>
          </a>
        </section>
        <section className={c.pageRight}>
          <div className={c.pageCardInfo}>
            <div className={c.infoBlock}>
              <div className={c.nameSpecialist}>
                <div className={c.specialist}>Психолог</div>
              </div>
              <div className={c.doctorName}>
                <a href="#">Сакович Екатерина Андреевна</a>
              </div>
              <div className={c.details}>
                <span className={c.detailsExperience}>Стаж 12 лет</span>
                <span className={c.detailsCategory}>Врач первой категории</span>
              </div>
              <div className={c.receptionButtons}>
                <div className={c.title}>Тип приёма</div>
                <div className={c.list}>
                  <div className={c.buttonItem}>
                    <div className={c.buttonClinic}>
                      <div className={c.buttonContent}>
                        <div className={c.buttonTop}>
                          <div className={c.iconBlock}></div>
                          <div className={c.iconToolTips}></div>
                        </div>
                        <div className={c.buttonLabel}>В клинике</div>
                        <div className={c.priceBlock}>
                          <div className={c.buttonPrice}>
                            <div className={c.priceActual}>
                              <span className={c.priceLabel}>5 500 ₽</span>
                              <img src="" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={c.phoneBlock}>
                <div className={c.pagePhole}>
                  <div className={c.pholeLabel}>Телефон для записи</div>
                  <div className={c.phoneLink}>
                    <a href="tel:79650033900">8(965)00-339-00</a>
                  </div>
                </div>
                <div className={c.tipMessage}>
                  На прошлой неделе записалось 5 человек
                </div>
              </div>
            </div>
            <div className={c.infoPhone}></div>
          </div>
          <div className={c.pageCatdClinic}></div>
        </section>
      </div>
    </div>
  );
}
