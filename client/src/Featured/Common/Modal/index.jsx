import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const DetailModal = () => {
  return (
    <div className="fixed inset-0 w-full h-full bg-[#00000058] z-[99999]">
      <div className="absolute flex items-center justify-center w-full h-full">
        <div className="bg-white w-[934px] h-[603px] p-[30px] absolute">
          <i class="ri-close-large-line absolute top-2 right-2 text-[20px] font-bold"></i>
          <div className="grid grid-cols-2 gap-5">
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
            <div className="right">
              <h2 className="text-[22px] leading-[26.4px] text-[#201f1f] font-medium mb-[10px]">
                Sacrificial Chair Design
              </h2>
              <div className="price flex items-center gap-2.5 mb-[10px]">
                <span className="text-[#201f1f] text-[24px] leading-[24px]">
                  $260.00
                </span>
                <span className="text-[#c3c3c3] font-normal line-through text-[20px] leading-[24px]">
                  $280.00
                </span>
              </div>
              <div className="mb-[10px]">
                <div className="flex items-center gap-4">
                  <h2 className="text-[14px] leading-[20px] text-[#606060]">
                    Availability:
                  </h2>
                  <p className="text-[#0066c0] text-[14px] font-normal">
                    In stock
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <h2 className="text-[14px] leading-[20px] text-[#606060]">
                    SKU:
                  </h2>
                  <p>N/A</p>
                </div>
              </div>
              <p className="pt-[10px] mb-[20px] text-[#606060] text-[14px] font-normal leading-[1.715]">
                Sapien luctus id justo suscipit nonummy eget hymenaeos phasellus
                felis enim, dolor tortor cras nonummy sit amet nam wisi
                suspendisse mattis mi vel leo. Don’t...
              </p>
              <div className="flex items-center gap-2.5  mb-[15px]">
                <ul className="flex items-center w-[135px] border-2 px-0.5 border-[#ebebeb] ">
                  <li className="w-[30px] text-[#201f1f] flex items-center justify-center">
                    <i class="ri-subtract-line"></i>
                  </li>
                  <li className="h-[44px] w-full text-[14px] font-medium text-center flex items-center justify-center">
                    <span className="font-semibold"> 1</span>
                  </li>
                  <li className="w-[30px] text-[#201f1f] flex items-center justify-center">
                    <i class="ri-add-line"></i>
                  </li>
                </ul>
                <button className="h-[48px] cursor-pointer px-[15px] bg-[#201f1f] border border-[#201f1f] hover:bg-[#bd8448] duration-300 hover:border-[#bd8448] w-full min-w-[110px] capitalize font-medium text-white">
                  Add to Card
                </button>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <h2 className="text-[14px] leading-[20px] text-[#606060]">
                    Product type:
                  </h2>
                  <p className="text-[14px] leading-[20px] text-[#000]">
                    Furniture
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <h2 className="text-[14px] leading-[20px] text-[#606060]">
                    Brand:
                  </h2>
                  <p className="text-[14px] leading-[20px] text-[#000]">
                    Castlery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
