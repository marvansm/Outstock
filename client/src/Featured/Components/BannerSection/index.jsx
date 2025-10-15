import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const BannerSection = () => {
  return (
    <div className=" bg-[#F6F6F6] ">
      <div className="mx-auto px-[10px] max-w-[1320px] ">
        <Swiper className="mySwiper relative">
          <SwiperSlide className="">
            <div
              className="w-full  bg-no-repeat bg-cover h-[600px]  flex items-center justify-start"
              style={{
                backgroundImage:
                  "url('https://vela-kazan.myshopify.com/cdn/shop/files/h1-slide1.jpg?v=1691976327')",
              }}
            >
              <div className="flex items-start flex-col justify-center">
                <h2 className="text-[#323232] font-semibold text-[30px] text-left leading-[1] mb-[25px]">
                  Handmade <br /> Hand Carved Coffee
                </h2>
                <p className="max-w-[650px] text-left text-[#323232] text-[14px] font-normal leading-[1.715] mb-[40px]">
                  As rich and unique as the coffee beans it is intended for,
                  this little scoop will make your morning ritual a special
                  occasion every day.
                </p>
                <button className="text-[#323232] uppercase bg-transparent hover:bg-[#BC8246] cursor-pointer hover:border-[#BC8246] duration-300 hover:text-white border-[#323232] border-2 text-[14px] py-[15px] px-[40px] font-semibold">
                  Discover Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full  bg-no-repeat bg-cover  h-[600px] max-h-[100vh] flex items-center justify-start"
              style={{
                backgroundImage:
                  "url('https://vela-kazan.myshopify.com/cdn/shop/files/h1-slide3.jpg?v=1691976328')",
              }}
            >
              <div className="flex items-start flex-col justify-center">
                <h2 className="text-[#323232] font-semibold text-[30px] text-left leading-[1] mb-[25px]">
                  Handmade <br /> Hand Carved Coffee
                </h2>
                <p className="max-w-[650px] text-left text-[#323232] text-[14px] font-normal leading-[1.715] mb-[40px]">
                  As rich and unique as the coffee beans it is intended for,
                  this little scoop will make your morning ritual a special
                  occasion every day.
                </p>
                <button className="text-[#323232] uppercase bg-transparent hover:bg-[#BC8246] cursor-pointer hover:border-[#BC8246] duration-300 hover:text-white border-[#323232] border-2 text-[14px] py-[15px] px-[40px] font-semibold">
                  Discover Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full  bg-no-repeat bg-cover h-[600px] max-h-[100vh] flex items-center justify-start"
              style={{
                backgroundImage:
                  "url('https://vela-kazan.myshopify.com/cdn/shop/files/h1-slide2.jpg?v=1691976327')",
              }}
            >
              <div className="flex items-start flex-col justify-center">
                <h2 className="text-[#323232] font-semibold text-[30px] text-left leading-[1] mb-[25px]">
                  Handmade <br /> Hand Carved Coffee
                </h2>
                <p className="max-w-[650px] text-left text-[#323232] text-[14px] font-normal leading-[1.715] mb-[40px]">
                  As rich and unique as the coffee beans it is intended for,
                  this little scoop will make your morning ritual a special
                  occasion every day.
                </p>
                <button className="text-[#323232] uppercase bg-transparent hover:bg-[#BC8246] cursor-pointer hover:border-[#BC8246] duration-300 hover:text-white border-[#323232] border-2 text-[14px] py-[15px] px-[40px] font-semibold">
                  Discover Now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <div className="bg-white px-[20px] py-[20px] ">
            <div className=" grid grid-cols-3 gap-5">
              <div
                className="h-[235px] bg-cover bg-no-repeat flex items-center justify-start "
                style={{
                  backgroundImage:
                    "url('https://vela-kazan.myshopify.com/cdn/shop/files/h1-banner1_420x231.jpg?v=1690860139')",
                }}
              >
                <div className="px-[25px]">
                  <h2 className="font-semibold text-[#323232] text-[16px] leading-[16px] mb-[10px]">
                    British Made Pocket <br />
                    Knife - Oak
                  </h2>
                  <span className="text-[#a3a3a3] text-[12px] font-normal">
                    Discover Now
                  </span>
                </div>
              </div>
              <div
                className="h-[235px] bg-cover bg-no-repeat flex items-center justify-start "
                style={{
                  backgroundImage:
                    "url('https://vela-kazan.myshopify.com/cdn/shop/files/h1-banner2_420x231.jpg?v=1690860139')",
                }}
              >
                <div className="px-[25px]">
                  <h2 className="font-semibold text-[#323232] text-[16px] leading-[16px] mb-[10px]">
                    British Made Pocket <br />
                    Knife - Oak
                  </h2>
                  <span className="text-[#a3a3a3] text-[12px] font-normal">
                    Discover Now
                  </span>
                </div>
              </div>
              <div
                className="h-[235px] bg-cover bg-no-repeat flex items-center justify-start "
                style={{
                  backgroundImage:
                    "url('https://vela-kazan.myshopify.com/cdn/shop/files/h1-banner3_420x231.jpg?v=1690860139')",
                }}
              >
                <div className="px-[25px]">
                  <h2 className="font-semibold text-[#323232] text-[16px] leading-[16px] mb-[10px]">
                    British Made Pocket <br />
                    Knife - Oak
                  </h2>
                  <span className="text-[#a3a3a3] text-[12px] font-normal">
                    Discover Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default BannerSection;
