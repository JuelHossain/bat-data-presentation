import { motion } from "framer-motion";
import DownloadPdf from "../statement/DownloadPdf";

export default function ChapterCard({ download, color, title, icon }) {
  return (
    <motion.div className={`${color} flex flex-col justify-between items-center gap-6 h-full p-4`}>
      <motion.div className="flex flex-col text-center justify-center items-center">
        <img src={icon} alt="icon" className=" h-40 p-10" />
        <h3 className="text-2xl">{title}</h3>
      </motion.div>
      {download && <DownloadPdf />}
    </motion.div>
  );
}
