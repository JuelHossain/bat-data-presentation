import { motion } from "framer-motion";
import data from "./data";
import Section from "./Section";

export default function Statement() {
  return (
    <motion.div className="flex flex-col gap-10 mb-16 p-4">
      <div className="overflow-hidden">
        {data.map((detail) => (
          <Section key={detail.title} {...detail} />
        ))}
      </div>
    </motion.div>
  );
}
