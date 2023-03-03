import { motion } from "framer-motion";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import image2 from "./howwewin.svg";
import image1 from "./mission-01.svg";
import "./module.background.css";
import image3 from "./ourpurpose_Artboard 1.svg";

// import required modules

export default function background() {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={30}
      modules={[Pagination]}
      mousewheel
      direction="horizontal"
      className="flex justify-center items-center"
    >
      <motion.svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1941.8 254.9"
        xml:space="preserve"
        className="absolute h-full z-0"
      >
        <motion.rect
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          y="10.2"
          className="st0"
          width="628.3"
          height="234.5"
        />
        <motion.polygon className="st6" points="1941.8,10.2 1941.8,244.7 1399.9,244.7 1462.3,127.5 1399.9,10.2 	" />
        <motion.polygon className="st7" points="618.2,10.2 565.8,127.5 628.1,244.7 1115.9,244.7 1105.9,10.2 	" />
        <motion.polygon
          className="st8"
          points="1462.8,127.5 1400.4,244.7 1192.6,244.7 1198.3,234.8 1259.6,127.1 1197.8,20.1 1192.1,10.2 
		1400.4,10.2 	"
        />
        <motion.polygon className="st9" points="1108.9,254.9 1254.6,254.9 1327.4,127.5 1254.6,0 1108.9,0 1036,127.5 	" />
      </motion.svg>
      <SwiperSlide>
        <motion.img src={image1} />
      </SwiperSlide>
      <SwiperSlide>
        <motion.img src={image2} />
      </SwiperSlide>
      <SwiperSlide>
        <motion.img src={image3} />
      </SwiperSlide>
    </Swiper>
  );
}
