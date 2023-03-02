/* eslint-disable consistent-return */
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function NumbersOfData({ beforeText, number, afterText, bottomText }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    const controls = animate(count, isInView ? number : 0, { duration: 2 });
    return controls.stop;
  }, [number, count, isInView]);

  return (
    <motion.div ref={ref} className="bg-main h-28 flex justify-end items-end">
      <motion.div className="">
        <motion.div className="text-white flex text-end items-end p-1 gap-1">
          <motion.p className="text-xl font-semibold">{beforeText}</motion.p>
          {typeof number === "number" ? (
            <motion.div className={`${"text-5xl font-semibold "}`}>{rounded}</motion.div>
          ) : (
            <motion.div className="text-3xl pl-32  uppercase font-semibold">{number}</motion.div>
          )}
          <motion.p className={afterText.length === 1 ? "text-5xl font-semibold" : "text-xl font-semibold"}>
            {afterText}
          </motion.p>
        </motion.div>
        <motion.p className="text-white text-end capitalize font-semibold text-lg">{bottomText}</motion.p>
      </motion.div>
    </motion.div>
  );
}
