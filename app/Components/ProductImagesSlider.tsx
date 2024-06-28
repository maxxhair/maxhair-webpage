import React, { CSSProperties, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

interface Props {
  swiperImages: string[] | any[];
}

const ProductImageSlider: React.FC<Props> = ({ swiperImages }) => {
  console.log("images", swiperImages);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{ height: "60vh", width: "100%" }}
        loop={true}
        spaceBetween={10}
        // navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {swiperImages?.map((image: string | any, index: number) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              width="100%"
              height="100%"
              style={{ objectFit: "contain" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        style={{ height: "100px", marginTop: "20px" }}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {swiperImages?.map((image: string | any) => (
          <SwiperSlide>
            <img
              src={image.src}
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductImageSlider;
