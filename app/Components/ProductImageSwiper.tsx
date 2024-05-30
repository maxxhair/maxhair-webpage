import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { productImage1, productImage2, productImage3 } from "../util/images";
import Image from "next/image";
import { FreeMode, Navigation, Pagination } from "swiper/modules";

interface Props {
  mainImage: string;
}

const ProductImageSwiper: React.FC<Props> = ({ mainImage }) => {
  const images = [mainImage, productImage1, productImage2, productImage3];

  return (
    <div className="w-full mt-[15vh]">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[FreeMode, Pagination]}
        pagination={{ clickable: true }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt=""
              className="w-full h-full object-cover"
              width={300}
              height={400}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImageSwiper;
