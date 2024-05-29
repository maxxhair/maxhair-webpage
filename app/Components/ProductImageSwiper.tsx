import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { productImage1, productImage2, productImage3 } from "../util/images";
import Image from "next/image";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
const images = [productImage1, productImage2, productImage3];

const ProductImageSwiper = () => {
  return (
    <div className="w-full ">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        modules={[FreeMode, Pagination, Navigation]}
        pagination={{ clickable: true }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImageSwiper;
