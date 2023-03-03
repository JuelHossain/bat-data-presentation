import { Carousel } from "@mantine/carousel";
import ChapterCard from "./ChapterCard";
import chapterData from "./chapterData";

export default function ChapterSlider() {
  const slides = chapterData.map((data) => (
    <Carousel.Slide key={data.title}>
      <ChapterCard {...data} />
    </Carousel.Slide>
  ));
  return (
    <Carousel
      withIndicators
      slideSize="15%"
      loop
      breakpoints={[
        { maxWidth: "xl", slideSize: "25%" },
        { maxWidth: "lg", slideSize: "35%" },
        { maxWidth: "md", slideSize: "45%" },
        { maxWidth: "sm", slideSize: "55%" },
        { maxWidth: "xs", slideSize: "65%" },
      ]}
      align="center"
      slidesToScroll={1.5}
      className="flex-1"
      classNames={{
        controls:
          " p-0 h-full w-full top-0 justify-between gap-[400px] sm:gap-[640px]  md:gap-[768px] lg:gap-[1024px] xl:gap-[1280px] 2xl:gap-[1536px]",
        control: " h-full m-0 p-0 rounded-none w-full bg-white/75 ",
        //   container: "gap-0 m-0 p-0",
        // viewport:"gap-0 m-0 p-0"
      }}
    >
      {slides}
    </Carousel>
  );
}
