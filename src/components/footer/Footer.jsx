import { motion } from "framer-motion";
import links from "./links";

export default function Footer() {
  return (
    <motion.div className="bg-shade">
      <motion.div className="container mx-auto py-6 flex flex-wrap ">
        {links.map((link) => (
          <motion.a className="text-white font-semibold p-2" key={link} href="#">
            {link}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
