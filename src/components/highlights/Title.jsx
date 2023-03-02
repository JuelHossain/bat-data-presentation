import { motion } from "framer-motion";

export default function Title({ children }) {
  return (
    <motion.div>
      <motion.h2 className="text-4xl font-bold">{children}</motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 100 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        exit={{ width: 0 }}
        className="h-1 bg-sec w-40 rounded-full my-4"
      />
    </motion.div>
  );
}
