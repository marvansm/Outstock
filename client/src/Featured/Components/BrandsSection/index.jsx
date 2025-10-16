import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const BrandSection = () => {
  const logos = [
    {
      id: 1,
      img: "https://vela-kazan.myshopify.com/cdn/shop/files/logo_image1_210x100.png?v=1613719814",
    },
    {
      id: 2,
      img: "https://vela-kazan.myshopify.com/cdn/shop/files/logo_image2_210x100.png?v=1613719814",
    },
    {
      id: 3,
      img: "https://vela-kazan.myshopify.com/cdn/shop/files/logo_image3_210x100.png?v=1613719814",
    },
    {
      id: 4,
      img: "https://vela-kazan.myshopify.com/cdn/shop/files/logo_image4_210x100.png?v=1613719815",
    },
    {
      id: 5,
      img: "https://vela-kazan.myshopify.com/cdn/shop/files/logo_image5_210x100.png?v=1613719815",
    },
    {
      id: 6,
      img: "https://vela-kazan.myshopify.com/cdn/shop/files/logo_image1_210x100.png?v=1613719814",
    },
    {
      id: 7,
      img: "https://vela-kazan.myshopify.com/cdn/shop/files/logo_image4_210x100.png?v=1613719815",
    },
  ];

  return (
    <section className="max-w-[1320px] mx-auto px-[10px] bg-[#FFFFFF] py-[150px]  relative">
      <Swiper
        className="mySwiper relative"
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Navigation, Autoplay]}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center w-[210px] h-[100px] transition-all duration-300 mx-auto">
              <img
                src={logo.img}
                alt={`Brand logo ${index + 1}`}
                className="w-[210px] h-[100px] object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 bg-[#989898] text-white w-[50px] h-[50px] flex items-center justify-center cursor-pointer  z-10 hover:bg-gray-800 transition-all duration-300">
          <i className="ri-arrow-left-s-line text-[22px]"></i>
        </div>
        <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 bg-[#989898] text-white w-[50px] h-[50px] flex items-center justify-center cursor-pointer  z-10 hover:bg-gray-800 transition-all duration-300">
          <i className="ri-arrow-right-s-line text-[22px]"></i>
        </div>
      </Swiper>
    </section>
  );
};

export default BrandSection;
