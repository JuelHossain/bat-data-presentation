import { motion } from "framer-motion";

import { MdArrowRightAlt, MdOutlineDownload } from "react-icons/md";

export default function Section({ img, title, sayings, reverse }) {
  return (
    <motion.div
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      exit={{ opacity: 0 }}
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
          <motion.button
            initial={{ x: -250 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-sec py-1 px-2 flex gap-2 items-center text-white"
          >
            Read The Full Review <MdArrowRightAlt className="border-b-2 text-xl" />
          </motion.button>
          <motion.button
            initial={{ x: -25 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2"
          >
            <MdOutlineDownload className="bg-main text-white text-3xl p-1" />
            Download PDF
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
