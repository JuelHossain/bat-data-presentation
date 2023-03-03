import { motion } from "framer-motion";
import years from "../../assets/banner/50yearswithtext.png";
import art from "../../assets/banner/artworks.svg";
import birds from "../../assets/banner/buildingbettertomorrow.png";
import Curve from "./Curve";

export default function Banner() {
  return (
    <motion.div className="overflow-hidden">
      <motion.div className="flex justify-center md:justify-between items-center container mx-auto md:px-10 md:py-32 px-4 ">
        <motion.img src={birds} className="mb-12 object-fill flex-1" />
        <motion.img src={years} className="object-fill flex-1 hidden md:block" />
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
