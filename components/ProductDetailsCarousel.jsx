import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = ({ images }) => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky mt-4 md:mt-0 top-[90px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        autoPlay={true}
        interval={5000}
        className="productCarousel"
      >
        {images?.map((img) => (
          <img
            key={img?.id}
            src={img?.attributes?.url}
            alt={img?.attributes?.name}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
