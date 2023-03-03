import { motion } from "framer-motion";
import { MdArrowRightAlt } from "react-icons/md";

export default function ReadButton({ children }) {
  return (
    <motion.button
      initial={{ x: -250 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-sec py-1 px-2 flex gap-2 items-center text-white"
    >
      {children || " Read The Full Review"} <MdArrowRightAlt className="border-b-2 text-xl" />
    </motion.button>
  );
}
