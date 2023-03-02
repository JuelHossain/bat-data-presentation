import { motion } from "framer-motion";
import IconAndTitle from "./IconAndTitle";
import NumbersOfData from "./NumbersOfData";

export default function Card({ icon, title, number, beforeText, afterText, bottomText }) {
  return (
    <motion.div key={title}>
      <IconAndTitle icon={icon} title={title} />
      <NumbersOfData number={number} beforeText={beforeText} afterText={afterText} bottomText={bottomText} />
    </motion.div>
  );
}
