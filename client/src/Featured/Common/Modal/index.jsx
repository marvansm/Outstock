import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const DetailModal = () => {
  return (
    <div className="fixed inset-0 w-full h-full bg-[#00000058] z-[99999]">
      <div className="absolute flex items-center justify-center w-full h-full">
        <div className="bg-white w-[934px] h-[603px]">
          <div className="grid grid-cols-2">
            <div className="left">
              <Swiper
                className="mySwiper relative"
                loop={true}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                modules={[Navigation, Autoplay]}
              >
                <SwiperSlide>
                  <div className="flex items-center justify-center transition-all duration-300 mx-auto">
                    <img
                      src="https://vela-kazan.myshopify.com/cdn/shop/products/14.jpg?v=1601694510"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex items-center justify-center  transition-all duration-300 mx-auto">
                    <img
                      src="https://vela-kazan.myshopify.com/cdn/shop/products/14-1.jpg?v=1601694510"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>

                <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 bg-[#989898] text-white w-[50px] h-[50px] flex items-center justify-center cursor-pointer  z-10 hover:bg-gray-800 transition-all duration-300">
                  <i className="ri-arrow-left-s-line text-[22px]"></i>
                </div>
                <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 bg-[#989898] text-white w-[50px] h-[50px] flex items-center justify-center cursor-pointer  z-10 hover:bg-gray-800 transition-all duration-300">
                  <i className="ri-arrow-right-s-line text-[22px]"></i>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
