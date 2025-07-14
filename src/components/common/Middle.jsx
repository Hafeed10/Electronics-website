import React from 'react';
import './Middle.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

function Middle() {
    return (
        <div className='middle'>
            <h1>Product Items</h1>
            <div className='slider-container'>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <div className="slide-content">
                            <img
                                src="/images/item/house-heating-concept-modern-home-gas-fired-boiler-energy-cash-savings-3d-rendering_415584-33-CRXiDYSF.jpg"
                                alt="Slide 1"
                            />
                            <div className="slide-text">
                                <h1>Solar Water Heaters</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slide-content">
                            <img
                                src="/images/item/men-s-hand-holds-glass-clear-water-tap-reverse-osmosis-filter-background_179369-577-DTCZpps5.jpg"
                                alt="Slide 2"
                            />
                            <div className="slide-text">
                                <h1>Water Purifier</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slide-content">
                            <img
                                src="/images/item/sungrow-emea-ceTSHQ0qars-unsplash-C9YZkDef.jpg"
                                alt="Slide 3"
                            />
                            <div className="slide-text">
                                <h1>Solar Panel</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slide-content">
                            <img
                                src="/images/item/thiru-n-n0gFDrIrTuU-unsplash-AVByb_xo.jpg"
                                alt="Slide 4"
                            />
                            <div className="slide-text">
                                <h1>Solar LED Street Light</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Middle;
