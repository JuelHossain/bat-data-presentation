import { motion } from "framer-motion";
import links from "./links";

export default function NavLinks() {
  return (
    <motion.div className="bg-main text-white mt-2 capitalize">
      <motion.div className="flex container mx-auto bg-shade p-5 divide-x-4 divide-yellow-400 justify-center gap-5 items-center">
        {links.map((link) => (
          <motion.a
            whileHover={{ scale: 1.2 }}
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            className="text-center flex-1"
            key={link.link}
            href={link.link}
          >
            {link.label}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
