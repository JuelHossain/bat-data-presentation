import { motion } from "framer-motion";
import { useState } from "react";
import Title from "../highlights/Title";
import DataContainer from "./DataContainer";
import Tab from "./Tab";

export default function Performance() {
  const [active, setActive] = useState(1);

  return (
    <motion.div className="mb-20">
      <motion.div className="container mx-auto flex flex-col gap-10 text-main ">
        <Title>Key Performance Indicators</Title>
        <Tab {...{ active, setActive }} />
        <DataContainer {...{ active, setActive }} />
      </motion.div>
    </motion.div>
  );
}
