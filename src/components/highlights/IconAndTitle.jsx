import { motion } from "framer-motion";

export default function IconAndTitle({ icon, title }) {
  return (
    <motion.div className="flex justify-between gap-4 text-end items-end">
      <motion.img src={icon} className="h-20 xl:h-28 -mb-8" />
      <motion.h2 className="text-3xl font-semibold uppercase xl:pl-24">{title}</motion.h2>
    </motion.div>
  );
}
