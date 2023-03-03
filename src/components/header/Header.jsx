import { motion } from "framer-motion";
import logoImage from "../../assets/logo.png";
import DownloadLink from "./DownloadLink";
import MenuButton from "./MenuButton";

export default function Header() {
  return (
    <motion.div className="bg-main p-4">
      <motion.div className="container mx-auto flex items-center justify-between flex-wrap gap-4">
        <motion.div className="flex justify-between max-md:w-full">
          <motion.img src={logoImage} />
          <MenuButton className="md:hidden " />
        </motion.div>

        <motion.div className="flex gap-6 flex-wrap">
          <DownloadLink>Download PDF</DownloadLink>
          <DownloadLink>Download Financial Statement</DownloadLink>
          <MenuButton className="hidden md:flex" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
