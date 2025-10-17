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
    <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10 mb-10">
      <HeadingText
        title={"Trending Products"}
        desc={
          "Mirum est notare quam littera gothica quam nunc putamus parum claram!"
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
        {data &&
          data
            .slice(0, load)
            .map((item, idx) => <Cards key={idx} product={item} />)}
      </div>

      <div className="flex items-center justify-center mt-8">
        {data && load < data.length && (
          <button
            onClick={() => setload((prev) => prev + 4)}
            className="uppercase text-[12px] sm:text-[14px] border border-[#ebebeb] font-semibold leading-[1.5] bg-transparent text-[#201f1f] hover:border-[#bd8448] hover:text-[#bd8448] duration-300 cursor-pointer px-6 py-3 sm:px-10 sm:py-4"
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default TrendsSection;
