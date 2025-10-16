const Cards = ({
  image,
  title,
  price,
  discountPrice,
  hoverImg,
  sale,
  colors,
}) => {
  return (
    <div className="overflow-hidden group">
      <div className="relative">
        <img src={image} alt="" className="w-full h-full object-cover" />
        {sale && (
          <div
            className={`absolute top-0 right-[20px] w-[28px] max-w-[28px] py-[10px] flex items-center justify-center z-[50] ${
              sale.includes("%")
                ? "bg-[#BC8246] text-white"
                : sale.toLowerCase().includes("out")
                ? "bg-[#FFC107] text-black"
                : sale.toLowerCase().includes("pre")
                ? "bg-[#0DCAF0] text-white"
                : "bg-gray-500"
            }`}
          >
            <span className="[writing-mode:vertical-lr] text-[12px] leading-[18px]  uppercase">
              {sale}
            </span>
          </div>
        )}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[50]">
          {colors ? (
            <ul className="flex items-center gap-1.5">
              <li className="p-[1px] border border-gray-400 rounded-full flex items-center justify-center">
                <div className="w-[15px] h-[15px] bg-gray-600 rounded-full"></div>
              </li>
              <li className="p-[1px] border border-gray-400 rounded-full flex items-center justify-center">
                <div className="w-[15px] h-[15px] bg-black rounded-full"></div>
              </li>
              <li className="p-[1px] border border-gray-400 rounded-full flex items-center justify-center">
                <div className="w-[15px] h-[15px] bg-blue-400 rounded-full"></div>
              </li>
              <li className="p-[1px] border border-gray-400 rounded-full flex items-center justify-center">
                <div className="w-[15px] h-[15px] bg-yellow-400 rounded-full"></div>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
        <div className="absolute bottom-4 right-2 z-[50]">
          <ul className="flex items-center gap-2.5 flex-col">
            <li className="w-[50px] h-[50px] bg-white rounded-full cursor-pointer text-[#969595] flex items-center justify-center transform rotate-180 translate-x-20 group-hover:rotate-0 group-hover:translate-x-0 duration-500">
              <i class="ri-poker-hearts-line text-[18px]"></i>
            </li>
            <li className="w-[50px] h-[50px] bg-white rounded-full cursor-pointer text-[#969595] flex items-center justify-center transform rotate-180 translate-x-20 group-hover:rotate-0 group-hover:translate-x-0 duration-500">
              <i class="ri-search-line text-[18px]"></i>
            </li>
          </ul>
        </div>
        <div className="absolute inset-0 opacity-0 duration-300 group-hover:opacity-100">
          <img src={hoverImg} alt="" />
        </div>
      </div>
      <div className="body  ">
        <h2 className="text-[#8c8c8c] leading-[20px] text-[14px] hover:text-[#BC8246] duration-200 mt-[6px]">
          {title}
        </h2>
        <div className="flex items-center justify-between">
          <div className="price mt-1 flex items-center gap-1.5 tranfsorm  group-hover:-translate-x-50 duration-200">
            <span className="text-[#201f1f] text-[14px] font-normal">
              {discountPrice}
            </span>
            <span className="text-[#c3c3c3] text-[14px] font-normal">
              {price}
            </span>
          </div>
          <p className="border-b border-gray-400 text-[#201f1f] text-[14px] font-medium capitalize transform translate-x-30 group-hover:-translate-x-53 duration-200 hover:text-[#bd8448] cursor-pointer">
            + Add to Cart
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
