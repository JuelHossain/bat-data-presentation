import { animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function useTextIncreased(number) {
  const count = useMotionValue(0);
  const data = useTransform(count, (latest) => Math.round(latest).toLocaleString());

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    const controls = animate(count, isInView ? number : 0, { duration: 2 });
    return controls.stop;
  }, [number, count, isInView]);
  return { data, ref };
}
