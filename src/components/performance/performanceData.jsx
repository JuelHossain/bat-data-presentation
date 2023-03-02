/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const years = [2021, 2020, 2019, 2018, 2017];
const data = (y) =>
  y.reduce((pre, year) => {
    if (pre?.["2021"] && pre?.["2020"] && pre?.["2021"] < pre?.["2020"])
      Object.assign(pre, { 2021: pre?.["2020"], 2020: pre?.["2021"] });
    return Object.assign(pre, { [year]: random(40, 96) });
  }, {});
const performanceData = {
  "net turnover": {
    ...data(years),
    color: "blue",
  },
  "gross profit ratio": {
    ...data(years),
    color: "orange",
  },
  "return on equity": {
    ...data(years),
    color: "yellow",
  },
  "return on asset": {
    ...data(years),
    color: "green",
  },
  eps: {
    ...data(years),
    color: "lime",
  },
  "contribution to exchequer": {
    ...data(years),
    color: "violet",
  },
  "property plant & equipment": {
    ...data(years),
    color: "pink",
  },
};

export default performanceData;
