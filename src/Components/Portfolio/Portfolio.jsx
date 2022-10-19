import React from 'react';
import "./Portfolio.css";
import Blog from "../../img/blog.png";
import Todo from "../../img/todo.png";
import Health from "../../img/healthfix.png";
import Urban from "../../img/urbanash.png";
import {Swiper, SwiperSlide} from "swiper/react";


const Portfolio = () => {
  return (
    <div className="portfolio">
        {/* Header */}
        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* Slider */}
        <Swiper className="portfolio-slider">
            <SwiperSlide>
                <img src={Blog} alt="Blog" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Health} alt="Health" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Urban} alt="UrbanAsh" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Todo} alt="Todo" />
            </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default Portfolio;