import { motion } from "framer-motion";
import { BsMenuButtonWide } from "react-icons/bs";

export default function MenuButton(prop) {
  return (
    <motion.button {...prop}>
      <BsMenuButtonWide className="text-white text-2xl" />
    </motion.button>
  );
}
