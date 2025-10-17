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

  const [load, setLoad] = useState(8);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setLoad((prev) => prev + 4);
      setLoading(false);
    }, 800);
  };

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
            onClick={handleLoadMore}
            disabled={loading}
            className={`uppercase text-[12px] sm:text-[14px] border border-[#ebebeb] font-semibold leading-[1.5] bg-transparent text-[#201f1f] hover:border-[#bd8448] hover:text-[#bd8448] duration-300 cursor-pointer px-6 py-3 sm:px-10 sm:py-4 flex items-center gap-2 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 text-[#bd8448]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            )}
            {loading ? "Loading..." : "Load more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default TrendsSection;
