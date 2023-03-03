import { motion } from "framer-motion";
import Card from "./Card";
import highlightsData from "./highlightsData";
import Title from "./Title";

export default function Highlights() {
  return (
    <motion.div className="mb-20 p-4 overflow-hidden">
      <motion.div className="container mx-auto flex flex-col gap-10">
        <Title>Highlights 2021</Title>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 justify-end items-end">
          {highlightsData.map((data) => {
            const { number } = data || {};

            return <Card key={number} {...data} />;
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
