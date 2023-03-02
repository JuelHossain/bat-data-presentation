import { motion } from "framer-motion";
import data from "./data";
import Section from "./Section";

export default function Statement() {
  return (
    <motion.div className="flex flex-col gap-10 mb-16">
      {" "}
      {data.map((detail) => (
        <Section key={detail.title} {...detail} />
      ))}
    </motion.div>
  );
}
