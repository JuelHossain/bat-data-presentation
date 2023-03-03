import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import useHorizontalScroll from "../../hooks/useSlideScroll";
import Background from "./shapes/background";

export default function Vision() {
  const ref = useHorizontalScroll();

  const viewRef = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      window.scroll({
        top: ref.current.offsetTop,
        left: 0,
        behavior: "smooth",
      });
    } else {
      // doing nothing
    }
  }, [ref, isInView]);
  return (
    <motion.div ref={viewRef}>
      <Background mainRef={ref} />
    </motion.div>
  );
}
