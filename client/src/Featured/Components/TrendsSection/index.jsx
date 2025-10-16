import { useQuery } from "@tanstack/react-query";
import AxiosService from "../../../Api/http";
import Cards from "../../Common/Cards";
import HeadingText from "../../Common/Heading";
import { useState } from "react";

const TrendsSection = () => {
  const api = new AxiosService("http://localhost:3000/");
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.getData("productSchema"),
  });
  const [load, setload] = useState(8);

  return (
    <div className="max-w-[1320px] mx-auto px-[10px]  mb-[40px]">
      <HeadingText
        title={"Trending Products"}
        desc={
          "Mirum est notare quam littera gothica quam nunc putamus parum claram!"
        }
      />
      <div className="grid grid-cols-4 gap-[20px]">
        {data &&
          data
            .slice(0, load)
            .map((item, idx) => (
              <Cards
                key={idx}
                image={item?.image}
                hoverImg={item?.hoverImage}
                title={item?.name}
                price={item?.Price}
                discountPrice={item?.DiscountPrice}
                sale={item?.sale}
              />
            ))}
      </div>
      <div className="flex items-center justify-center">
        {data && load < data.length  && (
          <button
            onClick={() => setload((prev) => prev + 4)}
            className="py-[20px] px-[35px] uppercase text-[12px] border border-[#ebebeb] mt-[40px] font-semibold leading-[1.5] bg-transparent  text-[#201f1f] hover:border-[#bd8448] hover:text-[#bd8448] duration-300 cursor-pointer"
          >
            <span className="px-[40px] py-[10px]"> Load more</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default TrendsSection;
