import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import hero01 from '../assets/main01.jpg';
import hero02 from '../assets/main02.jpg';
import hero03 from '../assets/main03.jpg';
import hero04 from '../assets/main04.jpg';
import hero05 from '../assets/main05.jpg';
import styles from '../css/Hero.module.css';

function Hero(props) {
  return (
    <Swiper
      scrollbar={{
        hide: true,
      }}
      navigation={true}
      loop={true}
      grabCursor={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Scrollbar, Navigation, Autoplay]}
      className={styles.hero}
    >
      <SwiperSlide>
        <img src={hero01} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={hero02} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={hero03} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={hero04} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={hero05} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Hero;
