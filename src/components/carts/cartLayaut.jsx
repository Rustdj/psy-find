import React from "react";
import c from "./cart.module.css";
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';
import ava from "../ava.svg";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import classes from "../content/sorting/sorting.module.css";

export default function CartLayaut() {

  //rating-smile----------------------------

  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: 'Very Satisfied',
    },
  };

  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }

  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };
  
  //rating-smile-------------------------

  return (
    <div className={c.doctorContainer}>
      <div className={c.wrapper}>
        <section className={c.pageLeft}>
          <div className={c.pageAvatar}>
            <a className={c.avatarLink} href="">
              <div className={c.avaPhoto}>
                <img src={ava} alt="ava" />
              </div>
            </a>
            <div title="Добавить врача в избранное" className={c.buttonLike}>
              <Rating
                name="highlight-selected-only"
                defaultValue={2}
                IconContainerComponent={IconContainer}
                highlightSelectedOnly
              />
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
          <div className={c.pageCatdClinic}>
            <div className={c.clinicInfo}>
              <div className={c.clinicAppointments}>
                <div className={c.wrapper}>
                  <div className={c.items}>
                    <div className={c.itemCaption}>
                      Выберите время приёма для записи онлайн
                    </div>
                    <div className={c.slotsDays}>
                      <div className={c.slotsBtns}>
                        <button className={classes.filterButton}>
                          четверг,3
                        </button>
                        <button className={classes.filterBtns}>
                          пятница,4
                        </button>
                        <button className={classes.filterBtn}>суббота,5</button>
                      </div>
                    </div>
                    <div className={c.btnBottom}>
                      <button className={c.time}>19:30</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={c.clinicLocation}>
                <div className={c.addressBlock}>
                  <div className={c.clinicName}></div>
                  <div className={c.clinicAdress}></div>
                  <div className={c.clinicStations}>
                    <div className={c.clinicStation}>
                      <a className={c.metroStation} href="">
                        <div className={c.label}>
                          <span className={c.icon}></span>
                          <span className={c.name}>Кропоткинская</span>
                        </div>
                        <div className={c.dist}>
                          <img className={c.svgIcon} src="" alt="" />
                          <span>550 м</span>
                        </div>
                      </a>
                    </div>
                    <div className={c.clinicStation}>
                      <a className={c.metroStation} href="">
                        <div className={c.label}>
                          <span className={c.icon}></span>
                          <span className={c.name}>Арбатская</span>
                        </div>
                        <div className={c.dist}>
                          <img className={c.svgIcon} src="" alt="" />
                          <span>940 м</span>
                        </div>
                      </a>
                    </div>
                    <div className={c.clinicStation}>
                      <a className={c.metroStation} href="">
                        <div className={c.label}>
                          <span className={c.icon}></span>
                          <span className={c.name}>Смоленская</span>
                        </div>
                        <div className={c.dist}>
                          <img className={c.svgIcon} src="" alt="" />
                          <span>820 м</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
