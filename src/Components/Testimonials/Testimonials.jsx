import React from 'react';
import "./Testimonials.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import { Pagination } from 'swiper';
import "swiper/css/pagination";
import profile1 from "../../img/profile1.jpg";
import profile2 from "../../img/profile2.jpg";
import profile3 from "../../img/profile3.jpg";
import profile4 from "../../img/profile4.jpg";

const Testimonials = () => {
    const clients = [
        {
            img: profile1,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, commodi.",
        },
        {
            img: profile2,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, commodi.",
        },
        {
            img: profile3,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, commodi.",
        },
        {
            img: profile4,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, commodi.",
        },
    ];

    return (
        <div className="t-wrapper">
            <div className="t-heading">
                <span>Open-Source Projects</span>
                <span>Exceptional Work</span>
                <span>by me...</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
            </div>
            <Swiper
                // Install swiper modules 
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide >
                            <div className="testimonial">
                                <img src={client.img} alt="client-img" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Testimonials;