import { motion } from "framer-motion";
import { BsMenuButtonWide } from "react-icons/bs";

export default function MenuButton() {
  return (
    <motion.button>
      <BsMenuButtonWide className="text-white text-2xl" />
    </motion.button>
  );
}
