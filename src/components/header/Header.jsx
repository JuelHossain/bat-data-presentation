import { motion } from "framer-motion";
import logoImage from "../../assets/logo.png";
import DownloadLink from "./DownloadLink";
import MenuButton from "./MenuButton";

export default function Header() {
  return (
    <motion.div className="bg-main p-4">
      <motion.div className="container mx-auto flex items-center justify-between">
        <motion.div>
          <motion.img src={logoImage} />
        </motion.div>

        <motion.div className="flex gap-6">
          <DownloadLink>Download PDF</DownloadLink>
          <DownloadLink>Download Financial Statement</DownloadLink>
          <MenuButton />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
