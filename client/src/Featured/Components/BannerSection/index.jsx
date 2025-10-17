import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const BannerSection = () => {
  return (
    <div className="bg-[#F6F6F6] mb-[200px] h-[700px]">
      <div className="mx-auto px-4 sm:px-6 lg:px-10 max-w-[1320px]">
        <Swiper className="mySwiper relative">
          <SwiperSlide>
            <div
              className="w-full bg-no-repeat bg-cover h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-start"
              style={{
                backgroundImage:
                  "url('https://vela-kazan.myshopify.com/cdn/shop/files/h1-slide1.jpg?v=1691976327')",
              }}
            >
              <div className="flex flex-col items-start justify-center px-4 sm:px-8 lg:px-12">
                <h2 className="text-[#323232] font-semibold text-[20px] sm:text-[26px] lg:text-[30px] leading-[1.1] mb-4 sm:mb-6 lg:mb-[25px]">
                  Handmade <br /> Hand Carved Coffee
                </h2>
                <p className="max-w-[100%] sm:max-w-[500px] lg:max-w-[650px] text-[#323232] text-[12px] sm:text-[13px] lg:text-[14px] font-normal leading-[1.6] sm:leading-[1.7] mb-4 sm:mb-6 lg:mb-[40px]">
                  As rich and unique as the coffee beans it is intended for,
                  this little scoop will make your morning ritual a special
                  occasion every day.
                </p>
                <button className="text-[#323232] uppercase bg-transparent hover:bg-[#BC8246] cursor-pointer hover:border-[#BC8246] duration-300 hover:text-white border-[#323232] border-2 text-[12px] sm:text-[14px] py-2 sm:py-[15px] px-4 sm:px-[40px] font-semibold">
                  Discover Now
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="w-full bg-no-repeat bg-cover h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-start"
              style={{
                backgroundImage:
                  "url('https://vela-kazan.myshopify.com/cdn/shop/files/h1-slide3.jpg?v=1691976328')",
              }}
            >
              <div className="flex flex-col items-start justify-center px-4 sm:px-8 lg:px-12">
                <h2 className="text-[#323232] font-semibold text-[20px] sm:text-[26px] lg:text-[30px] leading-[1.1] mb-4 sm:mb-6 lg:mb-[25px]">
                  Handmade <br /> Hand Carved Coffee
                </h2>
                <p className="max-w-[100%] sm:max-w-[500px] lg:max-w-[650px] text-[#323232] text-[12px] sm:text-[13px] lg:text-[14px] font-normal leading-[1.6] sm:leading-[1.7] mb-4 sm:mb-6 lg:mb-[40px]">
                  As rich and unique as the coffee beans it is intended for,
                  this little scoop will make your morning ritual a special
                  occasion every day.
                </p>
                <button className="text-[#323232] uppercase bg-transparent hover:bg-[#BC8246] cursor-pointer hover:border-[#BC8246] duration-300 hover:text-white border-[#323232] border-2 text-[12px] sm:text-[14px] py-2 sm:py-[15px] px-4 sm:px-[40px] font-semibold">
                  Discover Now
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="w-full bg-no-repeat bg-cover h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-start"
              style={{
                backgroundImage:
                  "url('https://vela-kazan.myshopify.com/cdn/shop/files/h1-slide2.jpg?v=1691976327')",
              }}
            >
              <div className="flex flex-col items-start justify-center px-4 sm:px-8 lg:px-12">
                <h2 className="text-[#323232] font-semibold text-[20px] sm:text-[26px] lg:text-[30px] leading-[1.1] mb-4 sm:mb-6 lg:mb-[25px]">
                  Handmade <br /> Hand Carved Coffee
                </h2>
                <p className="max-w-[100%] sm:max-w-[500px] lg:max-w-[650px] text-[#323232] text-[12px] sm:text-[13px] lg:text-[14px] font-normal leading-[1.6] sm:leading-[1.7] mb-4 sm:mb-6 lg:mb-[40px]">
                  As rich and unique as the coffee beans it is intended for,
                  this little scoop will make your morning ritual a special
                  occasion every day.
                </p>
                <button className="text-[#323232] uppercase bg-transparent hover:bg-[#BC8246] cursor-pointer hover:border-[#BC8246] duration-300 hover:text-white border-[#323232] border-2 text-[12px] sm:text-[14px] py-2 sm:py-[15px] px-4 sm:px-[40px] font-semibold">
                  Discover Now
                </button>
              </div>
            </div>
          </SwiperSlide>

          <div className="bg-white px-2 sm:px-6 py-4 sm:py-6 lg:px-[20px] lg:py-[20px] mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              <div
                className="h-[180px] sm:h-[200px] lg:h-[235px] bg-cover bg-no-repeat flex items-center justify-start rounded"
                style={{
                  backgroundImage:
                    "url('https://vela-kazan.myshopify.com/cdn/shop/files/h1-banner1_420x231.jpg?v=1690860139')",
                }}
              >
                <div className="px-3 sm:px-5 lg:px-[25px]">
                  <h2 className="font-semibold text-[#323232] text-[14px] sm:text-[15px] lg:text-[16px] leading-[16px] mb-2">
                    British Made Pocket <br />
                    Knife - Oak
                  </h2>
                  <span className="text-[#a3a3a3] text-[10px] sm:text-[11px] lg:text-[12px] font-normal">
                    Discover Now
                  </span>
                </div>
              </div>
              <div
                className="h-[180px] sm:h-[200px] lg:h-[235px] bg-cover bg-no-repeat flex items-center justify-start rounded"
                style={{
                  backgroundImage:
                    "url('https://vela-kazan.myshopify.com/cdn/shop/files/h1-banner2_420x231.jpg?v=1690860139')",
                }}
              >
                <div className="px-3 sm:px-5 lg:px-[25px]">
                  <h2 className="font-semibold text-[#323232] text-[14px] sm:text-[15px] lg:text-[16px] leading-[16px] mb-2">
                    British Made Pocket <br />
                    Knife - Oak
                  </h2>
                  <span className="text-[#a3a3a3] text-[10px] sm:text-[11px] lg:text-[12px] font-normal">
                    Discover Now
                  </span>
                </div>
              </div>
              <div
                className="h-[180px] sm:h-[200px] lg:h-[235px] bg-cover bg-no-repeat flex items-center justify-start rounded"
                style={{
                  backgroundImage:
                    "url('https://vela-kazan.myshopify.com/cdn/shop/files/h1-banner3_420x231.jpg?v=1690860139')",
                }}
              >
                <div className="px-3 sm:px-5 lg:px-[25px]">
                  <h2 className="font-semibold text-[#323232] text-[14px] sm:text-[15px] lg:text-[16px] leading-[16px] mb-2">
                    British Made Pocket <br />
                    Knife - Oak
                  </h2>
                  <span className="text-[#a3a3a3] text-[10px] sm:text-[11px] lg:text-[12px] font-normal">
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
