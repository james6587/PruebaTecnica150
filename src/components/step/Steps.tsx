import './Steps.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { StepSlide } from '../step-slide/StepSlide';
import { participateSteps } from '../../data/data';

const Steps = () => {
  return (
    <div className="swiper-cont">
      <Swiper
        slidesPerView={2}
        direction={'horizontal'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          1100: {
            slidesPerView: 2,
          },
        }}
      >
        {participateSteps.map((group, idxGroup) => (
          <SwiperSlide key={idxGroup}>
            {group.items.map(groupItem => (
              <StepSlide key={groupItem.id} step={groupItem} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Steps;
