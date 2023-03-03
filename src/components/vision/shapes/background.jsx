/* eslint-disable no-restricted-syntax */
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import image2 from "./howwewin.svg";
import image1 from "./mission-01.svg";
import image4 from "./ourpurpose_Artboard 1.svg";
import image3 from "./stakeholderoutcomes_Artboard 1.svg";

// import required modules

export default function Background({ mainRef }) {
  return (
    <div className="h-screen py-20 duration-300 bg-main overflow-x-scroll flex  my-20" ref={mainRef}>
      <AnimatePresence mode="wait">
        <motion.img key={4} initial={{ x: 150 }} whileInView={{ x: 500 }} src={image1} className="h-full p-12" />
        <motion.img
          key={1}
          transition={{ duration: 0.5 }}
          initial={{ x: 1300, opacity: 0 }}
          whileInView={{ x: 250, opacity: 1 }}
          exit={{ x: -1300 }}
          src={image2}
          className="h-full p-12 object-cover"
        />
        <motion.img
          key={2}
          // transition={{ delay: 1 }}
          initial={{ x: 600, opacity: 0 }}
          whileInView={{ x: -100, opacity: 1 }}
          exit={{ x: -1000 }}
          src={image4}
          className="h-full p-12 object-cover z-10"
        />
        <motion.img
          key={3}
          // transition={{ delay: 1 }}
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: -450, opacity: 1 }}
          src={image3}
          exit={{ x: -1000 }}
          // transition={{ delay: 1 }}
          className="h-full p-12 object-cover z-0"
        />
      </AnimatePresence>
      {/* <Picture /> */}
    </div>
    //   {/* <Carousel
    //     classNames={{
    //       root: "bg-hero-pattern",
    //     }}
    //   >
    //     <Carousel.Slide className="w-full h-full">
    //     </Carousel.Slide>
    //     <Carousel.Slide>
    //       <motion.img src={image2} className="h-96 object-contain" />
    //     </Carousel.Slide>
    //     <Carousel.Slide>
    //       <motion.img src={image3} className="h-96 object-contain" />
    //     </Carousel.Slide>
    //   </Carousel> */}
    // </motion.div>
  );
}
