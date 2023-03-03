import { motion } from "framer-motion";
import performanceData from "./performanceData";
import TabIndicator from "./TabIndicator";

export default function Tab({ active, setActive }) {
  const tabLinks = Object.keys(performanceData).map((key, index) => {
    const { color } = performanceData[key];
    const textColor = color === "yellow" ? "black" : color === "orange" ? "black" : active === index && "white";

    return (
      <motion.button
        onClick={() => setActive(index)}
        whileTap={{ scale: 0.5 }}
        whileHover={{ scale: 0.9 }}
        style={{
          border: `2px solid ${performanceData[key].color}`,
          backgroundColor: active === index && performanceData[key].color,
          color: textColor,
        }}
        className="flex-1 border px-4 py-1  uppercase text-center flex justify-center items-center font-semibold relative "
        key={key}
      >
        {active === index && <TabIndicator color={color} />}
        <p>{key}</p>
      </motion.button>
    );
  });
  return <motion.div className="flex gap-2 overflow-auto overflow-y-hidden pb-5"> {tabLinks}</motion.div>;
}
