import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper';
import slider_1 from '../../../assets/slider/indian-spices-collection-vintage-background_55610-2839.webp';
import slider_2 from '../../../assets/slider/spices-mix-isolated-white-background-top-view_106006-449.webp';
import slider_3 from '../../../assets/slider/half-top-view-dried-flowers-with-cinnamon-white-desk-color-flower-flavor_140725-110369.webp';
import Slider from './Slider';
import './HeroSection.css';

const sliderData = [
    {
        image: slider_1,
        title: "Welcome to Spicy Blog! Learn about Spices."
    },
    {
        image: slider_2,
        title: "Welcome to Spicy Blog! Learn about Spices."
    },
    {
        image: slider_3,
        title: "Welcome to Spicy Blog! Learn about Spices."
    },
];

const HeroSection = () => {
  return (
    <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                }}
                modules={[Autoplay]}
            >
                <SwiperSlide>
                    <Slider text={sliderData[0].title} img={sliderData[0].image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider text={sliderData[1].title} img={sliderData[1].image}/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slider text={sliderData[2].title} img={sliderData[2].image}/>
                </SwiperSlide>
            </Swiper>
        </>
  );
};

export default HeroSection;