import { motion } from "framer-motion";
import colorClass from "./colorClass";
import useTextIncreased from "./useTextIncreased";

export default function Bar({ year, percentage }) {
  const { data, ref } = useTextIncreased(percentage);

  return (
    <motion.div ref={ref} key={year} className="flex gap-2 items-center">
      <motion.p className="text-xl">{year}</motion.p>
      <motion.div className="bg-gray-100 h-12 w-full relative">
        <motion.div
          initial={{ width: 0 }}
          exit={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1 }}
          className={`${colorClass(year)} absolute h-full `}
        />
      </motion.div>
      <motion.div className="flex">
        <motion.p className="text-xl">{data}</motion.p>
        <motion.p className="text-xl">%</motion.p>
      </motion.div>
    </motion.div>
  );
}
