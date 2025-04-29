import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="h-[400px]"
    >
      <SwiperSlide><img src="/images/slide1.jpg" className="w-full h-full object-cover" alt="Slide 1"/></SwiperSlide>
      <SwiperSlide><img src="/images/slide2.jpg" className="w-full h-full object-cover" alt="Slide 2"/></SwiperSlide>
      <SwiperSlide><img src="/images/slide3.jpg" className="w-full h-full object-cover" alt="Slide 3"/></SwiperSlide>
      <SwiperSlide><img src="/images/slide4.jpg" className="w-full h-full object-cover" alt="Slide 4"/></SwiperSlide>
    </Swiper>
  );
}

export default HeroSlider;