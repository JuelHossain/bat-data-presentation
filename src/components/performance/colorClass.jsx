const colorClass = (year) => {
  switch (+year) {
    case 2021:
      return "bg-violet-500";
    case 2020:
      return "bg-green-500";
    case 2019:
      return "bg-lime-500";
    case 2018:
      return "bg-amber-500";
    case 2017:
      return "bg-orange-500";

    default:
      return "";
  }
};
export default colorClass;
