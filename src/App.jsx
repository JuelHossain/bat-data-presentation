import { motion } from "framer-motion";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Highlights from "./components/highlights/Highlights";
import NavLinks from "./components/links/NavLinks";
import Performance from "./components/performance/Performance";
import Statement from "./components/statement/Statement";

export default function App() {
  return (
    <motion.div>
      <Header />
      <Banner />
      <NavLinks />
      <Statement />
      <Highlights />
      <Performance />
    </motion.div>
  );
}
