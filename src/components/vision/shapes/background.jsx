/* eslint-disable no-restricted-syntax */
import { motion } from "framer-motion";
import React from "react";
import bg from "./ethos.png";

// import required modules

export default function Background() {
  // const scrollRef = useRef(null);
  // const ghostRef = useRef(null);
  // const [scrollRange, setScrollRange] = useState(0);
  // const [viewportW, setViewportW] = useState(0);

  // useLayoutEffect(() => {
  //   if (scrollRef) setScrollRange(scrollRef.current.scrollWidth);
  // }, [scrollRef]);

  // const onResize = useCallback((entries) => {
  //   for (const entry of entries) {
  //     setViewportW(entry.contentRect.width);
  //   }
  // }, []);

  // useLayoutEffect(() => {
  //   const resizeObserver = new ResizeObserver((entries) => onResize(entries));
  //   resizeObserver.observe(ghostRef.current);
  //   return () => resizeObserver.disconnect();
  // }, [onResize]);

  // const { scrollYProgress } = useViewportScroll();
  // const transform = useTransform(scrollYProgress, [0, 1], [0, -scrollRange + viewportW]);
  // const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  // const spring = useSpring(transform, physics);
  return (
    <motion.div className="h-[400px] relative">
      <motion.img src={bg} className="absolute z-10 h-full object-cover object-left" />
      <motion.div className="absolute z-20">
        
      </motion.div>
      {/* <Carousel
        classNames={{
          root: "bg-hero-pattern",
        }}
      >
        <Carousel.Slide className="w-full h-full">
          <motion.img src={image1} className="h-96 object-contain" />
        </Carousel.Slide>
        <Carousel.Slide>
          <motion.img src={image2} className="h-96 object-contain" />
        </Carousel.Slide>
        <Carousel.Slide>
          <motion.img src={image3} className="h-96 object-contain" />
        </Carousel.Slide>
      </Carousel> */}
    </motion.div>
  );
}
