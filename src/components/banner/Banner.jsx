import { motion } from "framer-motion";
import years from "../../assets/banner/50yearswithtext.png";
import art from "../../assets/banner/artworks.svg";
import birds from "../../assets/banner/buildingbettertomorrow.png";
import Curve from "./Curve";

export default function Banner() {
  return (
    <motion.div className="overflow-hidden">
      <motion.div className="flex justify-between items-center container mx-auto px-10 py-32">
        <motion.img src={birds} className="mb-12" />
        <motion.img src={years} />
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
