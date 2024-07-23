import React from "react";
import ProductCard from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Wrapper from "./Wrapper";

const ReleatedProducts = ({ products }) => {
  return (
    <Carousel>
      <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
        <CarouselContent>
          {products?.data?.map((product) => (
            <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
              <ProductCard key={product?.id} data={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="xl:flex hidden">
          <CarouselNext className="-mt-9" />
          <CarouselPrevious className="-mt-9" />
        </div>
      </div>
    </Carousel>
  );
};

export default ReleatedProducts;
