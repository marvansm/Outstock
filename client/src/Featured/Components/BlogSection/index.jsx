import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import HeadingText from "../../Common/Heading";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      img: "https://vela-kazan.myshopify.com/cdn/shop/articles/1_800x515.jpg?v=1511574495",
    },
    {
      id: 2,
      img: "https://vela-kazan.myshopify.com/cdn/shop/articles/2_800x515.jpg?v=1511574495",
    },
    {
      id: 3,
      img: "https://vela-kazan.myshopify.com/cdn/shop/articles/3_800x515.jpg?v=1511574496",
    },
    {
      id: 4,
      img: "https://vela-kazan.myshopify.com/cdn/shop/articles/4_800x515.jpg?v=1511574496",
    },
  ];

  return (
    <div>
      <section className="max-w-[1320px] mx-auto px-[10px] bg-[#FFFFFF] pb-20 relative">
        <div className="mb-10">
          <HeadingText
            title={"Our Blog Posts"}
            desc={
              "Mirum est notare quam littera gothica quam nunc putamus parum claram!"
            }
          />
        </div>

        <Swiper
          className="mySwiper relative"
          spaceBetween={25}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          modules={[Navigation, Autoplay]}
        >
          {blogs.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white  hover:shadow-md transition-all duration-300">
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt="Blog image"
                    className="w-full h-[260px] object-cover"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="text-[20px] font-medium leading-[26px] hover:text-[#BC8246] transition-all duration-300 cursor-pointer text-[#201f1f] mb-2">
                    Anteposuerit litterarum formas.
                  </h3>
                  <p className="text-[#8C8C8C] text-[12px] mb-4">
                    By <span className="text-[#C89867]">Mr Admin</span> /
                    November 16, 2017
                  </p>
                  <p className="text-[#606060] text-[14px] mb-5 leading-relaxed">
                    Diga, Koma and Torus are three kitchen utensils designed for
                    Ommo, a new design-oriented brand introduced at the Ambiente
                    show in February 2016. Minimalist approach,...
                  </p>
                  <button className="border border-[#EBEBEB] text-[14px] text-[#201f1f] font-medium py-[17px] px-[42px] hover:border-[#BC8246] hover:text-[#BC8246] transition-all duration-400">
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 bg-[#989898] text-white w-[50px] h-[50px] flex items-center justify-center cursor-pointer z-10 hover:bg-gray-800 transition-all duration-300">
            <i className="ri-arrow-left-s-line text-[22px]"></i>
          </div>
          <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 bg-[#989898] text-white w-[50px] h-[50px] flex items-center justify-center cursor-pointer z-10 hover:bg-gray-800 transition-all duration-300">
            <i className="ri-arrow-right-s-line text-[22px]"></i>
          </div>
        </Swiper>
      </section>
    </div>
  );
};

export default BlogSection;
