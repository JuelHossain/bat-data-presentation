/* eslint-disable import/no-extraneous-dependencies */
import { Carousel } from "@mantine/carousel";
import capitalData from "./capitalData";
import Card from "./Card";

export default function Slider() {
  return (
    <Carousel
      withIndicators
      slideSize="27%"
      slideGap="md"
      breakpoints={[
        { maxWidth: "lg", slideSize: "40%" },
        { maxWidth: "md", slideSize: "50%" },
        { maxWidth: "sm", slideSize: "65%" },
        { maxWidth: "xs", slideSize: "85%" },
      ]}
      loop
      align="center"
      slidesToScroll={1.5}
      className="flex-1"
      classNames={{ controls: " p-0 h-full w-full top-0", control: " h-full m-0 p-0 rounded-none w-20 bg-white/75 " }}
    >
      {capitalData.map((data) => (
        <Carousel.Slide key={Math.random()}>
          <Card {...data} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
