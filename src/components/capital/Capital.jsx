import { motion } from "framer-motion";
import Title from "../highlights/Title";
import Slider from "./Slider";

export default function Capital() {
  return (
    <motion.div className="mb-20">
      <motion.div className="container mx-auto flex flex-col gap-10 text-main w-full">
        <Title>Capital</Title>
        <Slider />
      </motion.div>
    </motion.div>
  );
}
