import { motion } from "framer-motion";
import { VscFilePdf } from "react-icons/vsc";

export default function DownloadLink({ children }) {
  return (
    <motion.div className="flex gap-2 items-center text-white">
      <VscFilePdf className="text-white text-xl pb-0.5 border-b" />
      <a href="/">{children}</a>
    </motion.div>
  );
}
