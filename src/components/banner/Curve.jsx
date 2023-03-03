import { motion } from "framer-motion";
import bottomLine from "../../assets/banner/onecurveline.svg";

export default function Curve() {
  return (
    <motion.div
      whileInView={{ x: [-500, 5000, -1200, 5000, -50] }}
      transition={{ repeat: "infinite", duration: 120 }}
      className="w-[2000px] flex justify-center mx-auto"
    >
      <motion.img src={bottomLine} className="-mr-2 " />
      <motion.img src={bottomLine} className="" />
      <motion.img src={bottomLine} className=" -ml-2 " />
      <motion.img src={bottomLine} className="-ml-4" />
      <motion.img src={bottomLine} className="-ml-6" />
      <motion.img src={bottomLine} className=" -ml-8 " />
    </motion.div>
  );
}
