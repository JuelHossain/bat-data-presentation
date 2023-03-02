import { motion } from "framer-motion";

import DownloadPdf from "./DownloadPdf";
import ReadButton from "./ReadButton";

export default function Section({ img, title, sayings, reverse }) {
  return (
    <motion.div
      key={title}
      initial={{ x: reverse ? 200 : -200 }}
      whileInView={{ x: 0 }}
      exit={{ x: reverse ? -200 : 200 }}
      transition={{ duration: 0.5 }}
      className={`container mx-auto flex  border-b-4 border-main ${reverse && "flex-row-reverse"}`}
    >
      <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="flex-1 relative">
        <motion.img src={img} className="w-full object-cover h-full object-top absolute " />
      </motion.div>
      <motion.div className="flex-1 p-20 pb-10 flex flex-col gap-6">
        <motion.div>
          <motion.h2 className="text-6xl font-semibold text-main ">{title}'s</motion.h2>
          <motion.h2 className="text-6xl font-semibold text-main ">Statement</motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 200 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            exit={{ width: 0 }}
            className="h-2 bg-sec w-40 rounded-full my-6"
          />
          <motion.p className="text-2xl pr-40">{sayings}</motion.p>
        </motion.div>
        <motion.div className="flex items-center gap-6">
          <ReadButton />
          <DownloadPdf />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
