import { motion } from "framer-motion";
import highlightsData from "./highlightsData";

export default function Highlights() {
  return (
    <motion.div className="mb-20">
      <motion.div className="container mx-auto flex flex-col gap-10">
        <motion.div>
          <motion.h2 className="text-4xl font-bold">Highlights 2021</motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            exit={{ width: 0 }}
            className="h-1 bg-sec w-40 rounded-full my-4"
          />
        </motion.div>
        <motion.div className="grid grid-cols-3 gap-6 justify-end items-end">
          {highlightsData.map((data) => {
            const { icon, title, number, beforeText, afterText, bottomText } = data || {};

            return (
              <motion.div key={title}>
                <motion.div className="flex justify-between gap-4 text-end items-end">
                  <motion.img src={icon} className="h-20 xl:h-28 -mb-8" />
                  <motion.h2 className="text-3xl font-semibold uppercase xl:pl-24">{title}</motion.h2>
                </motion.div>
                <motion.div className="bg-main h-28 flex justify-end items-end">
                  <motion.div className="">
                    <motion.div className="text-white flex text-end items-end p-1 gap-1">
                      <motion.p className="text-xl font-semibold">{beforeText}</motion.p>
                      <motion.h1
                        className={`${
                          typeof number === "string"
                            ? "text-3xl pl-32  uppercase font-semibold"
                            : "text-5xl font-semibold "
                        }`}
                      >
                        {number.toString().length === 1 ? `0${number}` : number.toLocaleString()}
                      </motion.h1>
                      <motion.p className={afterText.length === 1 ? "text-5xl font-semibold" : "text-xl font-semibold"}>
                        {afterText}
                      </motion.p>
                    </motion.div>
                    <motion.p className="text-white text-end capitalize font-semibold text-lg">{bottomText}</motion.p>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
