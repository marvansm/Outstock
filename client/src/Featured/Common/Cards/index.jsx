import React from "react";

const Cards = () => {
  return (
    <div className="overflow-hidden group">
      <div className="relative">
        <img
          src="https://vela-kazan.myshopify.com/cdn/shop/files/product-14-11.jpg?v=1691546137"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 right-[20px] w-[28px] max-w-[28px] h-[48px] flex items-center justify-center bg-[#BC8246] z-[50]">
          <span className="[writing-mode:vertical-lr] text-[12px]  leading-[18px] text-white">
            -40%
          </span>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[50]">
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
        </div>
        <div className="absolute bottom-4 right-2 z-[50]">
          <ul className="flex items-center gap-2.5 flex-col">
            <li className="w-[50px] h-[50px] bg-white rounded-full text-[#969595] flex items-center justify-center transform rotate-180 translate-x-20 group-hover:rotate-0 group-hover:translate-x-0 duration-500">
              <i class="ri-poker-hearts-line text-[18px]"></i>
            </li>
            <li className="w-[50px] h-[50px] bg-white rounded-full text-[#969595] flex items-center justify-center transform rotate-180 translate-x-20 group-hover:rotate-0 group-hover:translate-x-0 duration-500">
              <i class="ri-search-line text-[18px]"></i>
            </li>
          </ul>
        </div>
        <div className="absolute inset-0 opacity-0 duration-300 group-hover:opacity-100">
          <img
            src="https://vela-kazan.myshopify.com/cdn/shop/files/product-14-13.jpg?v=1691546137"
            alt=""
          />
        </div>
      </div>
      <div className="body">
        <h2 className="text-[#8c8c8c] leading-[20px] text-[14px] hover:text-[#BC8246] duration-200 mt-[6px]">
          Plastic Dining Armchair
        </h2>
        <div className="price mt-1 flex items-center gap-1.5">
          <span className="text-[#201f1f] text-[14px] font-normal">
            $120.00
          </span>
          <span className="text-[#c3c3c3] text-[14px] font-normal">
            $200.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
