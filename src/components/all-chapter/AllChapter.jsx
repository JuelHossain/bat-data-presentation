import { motion } from "framer-motion";
import Title from "../highlights/Title";
import ChapterSlider from "./ChapterSlider";

export default function AllChapter() {
  return (
    <motion.div className="relative overflow-hidden">
      <motion.div className=" flex flex-col gap-10">
        <Title center>All Chapter</Title>
        <ChapterSlider />
      </motion.div>
    </motion.div>
  );
}
