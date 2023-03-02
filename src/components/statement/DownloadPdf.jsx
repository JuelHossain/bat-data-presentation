import { motion } from "framer-motion";
import { MdOutlineDownload } from "react-icons/md";

export default function DownloadPdf() {
  return (
    <motion.button
      initial={{ x: -25 }}
      whileInView={{ x: 0 }}
      transition={{ delay: 0.5 }}
      className="flex items-center gap-2"
    >
      <MdOutlineDownload className="bg-main text-white text-3xl p-1" />
      Download PDF
    </motion.button>
  );
}
