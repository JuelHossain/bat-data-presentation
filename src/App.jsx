import { motion } from "framer-motion";
import AllChapter from "./components/all-chapter/AllChapter";
import Banner from "./components/banner/Banner";
import Capital from "./components/capital/Capital";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Highlights from "./components/highlights/Highlights";
import NavLinks from "./components/links/NavLinks";
import Performance from "./components/performance/Performance";
import Statement from "./components/statement/Statement";
// import Vision from "./components/vision/Vision";

export default function App() {
  return (
    <motion.div>
      <Header />
      <Banner />
      <NavLinks />
      <Statement />
      <Highlights />
      <Performance />
      {/* <Vision /> */}
      <Capital />
      <AllChapter />
      <Footer />
    </motion.div>
  );
}
