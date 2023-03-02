import { motion } from "framer-motion";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import NavLinks from "./components/links/NavLinks";

export default function App() {
  return (
    <motion.div>
      <Header />
      <Banner />
      <NavLinks />
    </motion.div>
  );
}
