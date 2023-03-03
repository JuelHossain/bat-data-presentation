import { motion } from "framer-motion";
import ReadButton from "../statement/ReadButton";

export default function Card({ img, title, name, designation, text, colorClass }) {
  return (
    <motion.div className={` flex flex-col justify-between items-center p-6 gap-10 ${colorClass} h-full`}>
      <motion.div className="flex flex-col gap-4 text-center items-center justify-center">
        <motion.img src={img} className="w-full h-72 object-cover object-top " />
        <motion.h3 className="text-2xl text-white">{title}</motion.h3>
        <motion.div className="h-1 bg-white w-20" />
        <motion.p className="text-lg text-white line-clamp-5">{text}</motion.p>
        <motion.div>
          <motion.p className="font-semibold text-white">{name}</motion.p>
          <motion.p className="text-white">{designation}</motion.p>
        </motion.div>
      </motion.div>
      <ReadButton>Read More</ReadButton>
    </motion.div>
  );
}
