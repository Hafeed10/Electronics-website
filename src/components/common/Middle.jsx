import React from 'react';
import './Middle.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

import Slide1 from '../../assets/images/item/house-heating-concept-modern-home-gas-fired-boiler-energy-cash-savings-3d-rendering_415584-33-CRXiDYSF.jpg';
import Slide2 from '../../assets/images/item/men-s-hand-holds-glass-clear-water-tap-reverse-osmosis-filter-background_179369-577-DTCZpps5.jpg';
import Slide3 from '../../assets/images/item/sungrow-emea-ceTSHQ0qars-unsplash-C9YZkDef.jpg'
import Slide4 from '../../assets/images/item/thiru-n-n0gFDrIrTuU-unsplash-AVByb_xo.jpg'

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
                                src={Slide1}
                                alt="Slide 1"
                            />
                            <div className="slide-text">
                                <h1>Solar Water Heaters</h1>
                                <p>
                                    Efficient and eco-friendly water heating solution that uses
                                    solar energy to provide hot water for your home or business—saving electricity and reducing utility costs.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slide-content">
                            <img
                                src={Slide2}
                                alt="Slide 2"
                            />
                            <div className="slide-text">
                                <h1>Water Purifier</h1>
                                <p>
                                    Advanced filtration system that removes impurities, bacteria, and harmful contaminants
                                    to provide clean, safe, and great-tasting drinking water.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slide-content">
                            <img
                                src={Slide3}
                                alt="Slide 3"
                            />
                            <div className="slide-text">
                                <h1>Solar Panel</h1>
                                <p>
                                    Harness the power of the sun with high-efficiency solar panels that convert sunlight
                                    into clean, renewable energy—ideal for homes, businesses, and off-grid applications
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slide-content">
                            <img
                                src={Slide4}
                                alt="Slide 4"
                            />
                            <div className="slide-text">
                                <h1>Solar LED Street Light</h1>
                                <p>
                                    Energy-efficient outdoor lighting solution powered by solar energy, featuring bright LED illumination, automatic operation,
                                    and zero electricity cost—perfect for streets, parks, and public areas.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Middle;
