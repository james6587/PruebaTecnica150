import './prizeCards.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { useRef } from 'react';
import { Swiper as SwiperCore } from 'swiper/types';
import PrizeCard from '../price-card/PrizeCard';
import { prizes } from '../../data/data';
import { Prize } from '../../models/prizes.model';

const PrizeCards = () => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <div className="swiper-container">
      <div className="swiper-button-mobile">
        <div
          onClick={() => swiperRef.current?.slidePrev()}
          className="swiper-button-mobile__left"
        ></div>
      </div>
      <Swiper
        direction={'vertical'}
        onBeforeInit={swiper => {
          swiperRef.current = swiper;
        }}
        effect={'slide'}
        spaceBetween={20}
        loop={true}
        slidesPerView={3}
        className="mySwiperPrize"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
            direction: 'horizontal',
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 20,
            direction: 'vertical',
          },
        }}
      >
        {prizes.map((prize: Prize) => (
          <SwiperSlide key={prize.id}>
            <PrizeCard prize={prize} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button">
        <div
          role="button"
          onClick={() => swiperRef.current?.slidePrev()}
          className="swiper-button__up"
        ></div>
        <div
          onClick={() => swiperRef.current?.slideNext()}
          className="swiper-button__down"
        ></div>
      </div>

      <div className="swiper-button-mobile">
        <div
          onClick={() => swiperRef.current?.slideNext()}
          className="swiper-button-mobile__right"
        ></div>
      </div>
    </div>
  );
};

export default PrizeCards;
