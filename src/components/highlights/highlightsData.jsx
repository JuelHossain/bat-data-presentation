import batch from "../../assets/icons/batch.svg";
import employees from "../../assets/icons/friends.svg";
import love from "../../assets/icons/handsoflove.svg";
import leaf from "../../assets/icons/leaf.svg";
import shareHolders from "../../assets/icons/shareholders.svg";
import taxpayer from "../../assets/icons/taxpayer.svg";

const highlightsData = [
  {
    title: "highest tax payer",
    beforeText: "BDT",
    number: 29078,
    afterText: "Crore",
    bottomText: "contributed during 2021",
    icon: taxpayer,
    comma: 2,
  },
  {
    title: "shareholders",
    beforeText: "",
    number: 67200,
    afterText: "+",
    bottomText: "",
    icon: shareHolders,
    comma: 2,
  },
  {
    title: "employees & associates",
    beforeText: "",
    number: 1643,
    afterText: "",
    bottomText: "",
    icon: employees,
    comma: 1,
  },
  {
    title: "top employer",
    beforeText: "",
    number: 3,
    afterText: "times",
    bottomText: "",
    icon: batch,
  },
  {
    title: "leaf export",
    beforeText: "USD",
    number: 32,
    afterText: "min",
    bottomText: "",
    icon: leaf,
  },
  {
    title: "corporate social responsibility",
    beforeText: "",
    number: " bonayan probaho deepto",
    afterText: "",
    bottomText: "",
    icon: love,
  },
];
export default highlightsData;
