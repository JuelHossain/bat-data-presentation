import { motion } from "framer-motion";
import Card from "./Card";
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
            const { number } = data || {};

            return <Card key={number} {...data} />;
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
