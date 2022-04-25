import React from "react";
import c from "./cart.module.css";
import Rating from "@mui/material/Rating";
import ava from "../ava.svg";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import classes from "../content/sorting/sorting.module.css";
import MaterialUi from "./MaterialUi";
import { dataBase } from './cartData.jsx';

export default function CartLayaut({ IconContainer }) {
  //rating-smile----------------------------
  <MaterialUi />;
  //-------------------------

  const getDataSpecialist = dataBase.map((item) => {
    return (
      
        <div key={item.id} className={c.wrapper}>
          <section className={c.pageLeft}>
            <div className={c.pageAvatar}>
              <a className={c.avatarLink} href="">
                <div className={c.avaPhoto}>
                  <img src={item.image} alt="ava" />
                </div>
              </a>
              <div
                title="Добавить врача в избранное"
                className={c.buttonLike}
              ></div>
            </div>
            <a className={c.starValue} href="">
              <div className={c.ratingDoctor}>
                <div className={c.ratingStars}>
                  <div className={c.ratingMono}>
                    <Rating
                      name="highlight-selected-only"
                      defaultValue={2}
                      IconContainerComponent={IconContainer}
                      highlightSelectedOnly
                    />
                  </div>
                </div>
                <div className={c.recommendations}>
                  <div className={c.value}>
                    <span>{item.recommendations}</span>
                    <span>рекомендует врача</span>
                  </div>
                  <span className={c.valueLabel}>{item.reviews}</span>
                </div>
              </div>
            </a>
          </section>
          <section className={c.pageRight}>
            <div className={c.pageCardInfo}>
              <div className={c.infoBlock}>
                <div className={c.nameSpecialist}>
                  <div className={c.specialist}>{item.specialist}</div>
                </div>
                <div className={c.doctorName}>
                  <a href="#">{item.specialistName}</a>
                </div>
                <div className={c.details}>
                  <span className={c.detailsExperience}>{item.experience}</span>
                  <span className={c.detailsCategory}>
                    {item.doctorCategory}
                  </span>
                </div>
                <div className={c.receptionButtons}>
                  <div className={c.title}>Тип приёма</div>
                  <div className={c.list}>
                    <div className={c.buttonItem}>
                      <div className={c.buttonClinic}>
                        <div className={c.buttonContent}>
                          <div className={c.buttonTop}>
                            <div className={c.iconBlock}>
                              <ApartmentIcon className={c.color} />
                            </div>
                            <div className={c.iconToolTips}>
                              <ErrorOutlineIcon className={c.color} />
                            </div>
                          </div>
                          <div className={c.buttonLabel}>{item.receptionType}</div>
                          <div className={c.priceBlock}>
                            <div className={c.buttonPrice}>
                              <div className={c.priceActual}>
                                <span className={c.priceLabel}>{item.price}</span>
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
                  <div className={c.pagePhone}>
                    <div className={c.pholeLabel}>Телефон для записи</div>
                    <div className={c.phoneLink}>
                      <a href={item.phone}>{item.phone}</a>
                    </div>
                  </div>
                  <div className={c.tipMessage}>
                    На прошлой неделе записалось <span>{item.appointmentDoctor}</span> человек
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
                            {item.appointmentCalendar}
                          </button>
                          <button className={classes.filterBtns}>
                            {item.appointmentCalendar2}
                          </button>
                          <button className={classes.filterBtn}>
                            {item.appointmentCalendar3}
                          </button>
                        </div>
                      </div>
                      <div className={c.btnBottom}>
                        <button className={c.time}>{item.buttonWatch}</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={c.clinicLocation}>
                  <div className={c.addressBlock}>
                    <div className={classes.city}>
                      {item.address}
                    </div>
                    <div className={c.clinicName}></div>
                    <div className={c.clinicAdress}></div>
                    <div className={c.clinicStations}>
                      <div className={c.clinicStation}>
                        <a className={c.metroStation} href="">
                          <div className={c.label}>
                            <span className={c.icon}></span>
                            <span className={c.name}>{item.metro1} -</span>
                          </div>
                          <div className={c.dist}>
                            <img className={c.svgIcon} src="" alt="" />
                            <span>{item.distance1}</span>
                          </div>
                        </a>
                      </div>
                      <div className={c.clinicStation}>
                        <a className={c.metroStation} href="">
                          <div className={c.label}>
                            <span className={c.icon}></span>
                            <span className={c.name}>{item.metro2} -</span>
                          </div>
                          <div className={c.dist}>
                            <img className={c.svgIcon} src="" alt="" />
                            <span>{item.distance2}</span>
                          </div>
                        </a>
                      </div>
                      <div className={c.clinicStation}>
                        <a className={c.metroStation} href="">
                          <div className={c.label}>
                            <span className={c.icon}></span>
                            <span className={c.name}>{item.metro3} -</span>
                          </div>
                          <div className={c.dist}>
                            <img className={c.svgIcon} src="" alt="" />
                            <span>{item.distance3}</span>
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
      
    );
  });

  return (
    <div className={c.doctorContainer}>
      {getDataSpecialist}
    </div>
  );
}
