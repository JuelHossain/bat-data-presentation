/* eslint-disable no-multi-assign */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import DownloadPdf from "../statement/DownloadPdf";
import Bar from "./Bar";
import performanceData from "./performanceData";
import useTextIncreased from "./useTextIncreased";

export default function DataContainer({ active }) {
  const [data, setData] = useState({});

  useEffect(() => {
    Object.keys(performanceData).forEach((key, index) => {
      if (active === index) {
        setData({ ...performanceData[key], title: key });
      }
    });
    return () => setData({});
  }, [active]);
  const { color, title, ...ratio } = data || {};
  return (
    <motion.div className="flex gap-6 flex-col md:flex-row " key={title}>
      <motion.div className="flex flex-col gap-6 flex-1 basis-2/3">
        <HeaderOFData title={title} />
        <Bars {...{ title, data, ratio }} />
      </motion.div>
      <ComparedData {...{ ratio }} />
    </motion.div>
  );
}

function HeaderOFData({ title }) {
  return (
    <motion.div className="flex justify-between">
      <motion.h2 className="text-2xl uppercase font-semibold">{title}</motion.h2>
      <motion.h3 className="text-xl ">In BDT Crore</motion.h3>
    </motion.div>
  );
}

function Bars({ data, ratio }) {
  const bars = Object.keys(ratio).map((year) => {
    const percentage = data[year];
    return <Bar key={year} {...{ percentage, year }} />;
  });
  return <motion.div className="flex flex-col gap-5">{bars.reverse()}</motion.div>;
}

function ComparedData({ ratio }) {
  const total = ratio["2021"] - ratio["2020"];
  const { data, ref } = useTextIncreased(total);
  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-4 flex-1 basis-1/3 md:items-end md:justify- justify-center items-center text-center "
    >
      <motion.div className="flex flex-col md:items-end items-center">
        <div className="flex">
          <motion.h2 className="text-[160px] md:text-[120px] lg:text-[180px] font-bold ">{data}</motion.h2>
          <motion.h2 className="text-[160px] md:text-[120px] lg:text-[180px] font-bold ">%</motion.h2>
        </div>

        <motion.h2 className="text-2xl font-bold -mt-10 md:ml-40 md:text-end">
          Increase in Growth compared to last year
        </motion.h2>
      </motion.div>
      <DownloadPdf />
    </motion.div>
  );
}
