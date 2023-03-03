import { motion } from "framer-motion";
import years from "../../assets/banner/50yearswithtext.png";
import art from "../../assets/banner/artworks.svg";
import birds from "../../assets/banner/buildingbettertomorrow.png";
import Header from "../header/Header";
import Curve from "./Curve";

export default function Banner() {
  return (
    <motion.div className=" flex flex-col  justify-between">
      <Header />
      <motion.div className="flex justify-center md:justify-between items-center container mx-auto md:px-20 md:py-24 p-10 flex-1 overflow-hidden">
        <motion.img src={birds} className="mb-12 object-contain flex-1" />
        <motion.img src={years} className="object-contain flex-1 hidden md:block" />
      </motion.div>

      <motion.div className="overflow-hidden">
        <motion.img src={art} />
        <Curve />
        <Curve />
        <Curve />
        <Curve />
        <Curve />
      </motion.div>
    </motion.div>
  );
}
