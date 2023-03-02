import { motion } from "framer-motion";

export default function TabIndicator({ color }) {
  return (
    <motion.svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 26.1 13"
      xmlSpace="preserve"
      className="w-10 h-7 absolute -bottom-5"
    >
      <motion.polygon fill={color} className="st0" points="0,0 13,13 26.1,0 " />
    </motion.svg>
  );
}
