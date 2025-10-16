import { useQuery } from "@tanstack/react-query";
import AxiosService from "../../../Api/http";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Cards from "../../Common/Cards";
import HeadingText from "../../Common/Heading";

const SaleOfSection = () => {
  const api = new AxiosService("http://localhost:3000/");
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.getData("productSchema"),
  });
  return (
    <section className="max-w-[1320px] mx-auto px-[10px] bg-[#FFFFFF]  relative">
      <HeadingText
        title={"Sale Off"}
        desc={
          "Mirum est notare quam littera gothica quam nunc putamus parum claram!"
        }
      />
      <Swiper
        className="mySwiper relative mt-[40px]"
        spaceBetween={20}
        slidesPerView={4}
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
        {data &&
          data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <Cards
                image={item?.image}
                hoverImg={item?.hoverImage}
                title={item?.name}
                price={item?.Price}
                discountPrice={item?.DiscountPrice}
                sale={item?.sale}
              />
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

export default SaleOfSection;
