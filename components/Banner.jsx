import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Wrapper from "./Wrapper";

const Banner = () => {
  return (
    <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/slide-2.png"
              width={1200}
              height={600}
              className="rounded-2xl"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/slide-3.png"
              width={1200}
              height={600}
              className="rounded-2xl"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className="hidden md:flex" />
        <CarouselPrevious className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default Banner;
