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
      className={`container mx-auto flex flex-col   border-b-4 border-main ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="flex-1 relative">
        <motion.div className="w-full h-full flex justify-center items-end">
          <motion.img
            src={img}
            className="h-full w-full max-h-96 md:max-h-[500px] xl:max-h-[600px] object-cover object-top "
          />
        </motion.div>
      </motion.div>
      <motion.div className="flex-1 md:p-20 pb-10 flex flex-col gap-6">
        <motion.div>
          <motion.h2 className="text-2xl xs:text-4xl lg:text-5xl xl:text-6xl font-semibold text-main ">
            {title}'s
          </motion.h2>
          <motion.h2 className=" xs:text-4xl lg:text-5xl xl:text-6xl font-semibold text-main text-2xl ">
            Statement
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 200 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            exit={{ width: 0 }}
            className="h-2 bg-sec w-40 rounded-full my-6"
          />
          <motion.p className=" text-lg lg:text-xl xl:text-2xl 2xl:pr-40">{sayings}</motion.p>
        </motion.div>
        <motion.div className="flex items-center gap-6 flex-wrap">
          <ReadButton />
          <DownloadPdf />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
