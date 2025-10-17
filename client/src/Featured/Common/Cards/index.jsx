import { useState } from "react";
import DetailModal from "../Modal";

const Cards = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="overflow-hidden group">
      <div className="relative">
        <img
          src={product?.image}
          alt=""
          className="w-full h-full object-cover"
        />

        {product?.sale && (
          <div
            className={`absolute top-0 right-[20px] w-[28px] max-w-[28px] py-[10px] flex items-center justify-center z-[50] ${
              product?.sale.includes("%")
                ? "bg-[#BC8246] text-white"
                : product?.sale.toLowerCase().includes("out")
                ? "bg-[#FFC107] text-black"
                : product?.sale.toLowerCase().includes("pre")
                ? "bg-[#0DCAF0] text-white"
                : "bg-gray-500"
            }`}
          >
            <span className="[writing-mode:vertical-lr] text-[12px] leading-[18px]  uppercase">
              {product?.sale}
            </span>
          </div>
        )}

        {product?.colors && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[50]">
            <ul className="flex items-center gap-1.5">
              {product?.colors.map((color, idx) => (
                <li
                  key={idx}
                  className="p-[1px] border border-gray-400 rounded-full flex items-center justify-center"
                >
                  <div
                    className={`w-[15px] h-[15px] rounded-full`}
                    style={{ backgroundColor: color.toLowerCase() }}
                  ></div>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="absolute bottom-4 right-2 z-[50]">
          <ul className="flex items-center gap-2.5 flex-col">
            <li className="w-[50px] h-[50px] bg-white rounded-full cursor-pointer text-[#969595] flex items-center justify-center transform rotate-180 translate-x-20 group-hover:rotate-0 group-hover:translate-x-0 duration-500">
              <i className="ri-poker-hearts-line text-[18px]"></i>
            </li>
            <li
              onClick={() => setIsModalOpen(true)}
              className="w-[50px] h-[50px] bg-white rounded-full cursor-pointer text-[#969595] flex items-center justify-center transform rotate-180 translate-x-20 group-hover:rotate-0 group-hover:translate-x-0 duration-500"
            >
              <i className="ri-search-line text-[18px]"></i>
            </li>
          </ul>
        </div>

        <div className="absolute inset-0 opacity-0 duration-300 group-hover:opacity-100">
          <img src={product?.hoverImage} alt="" />
        </div>
      </div>

      <div className="body">
        <h2 className="text-[#8c8c8c] leading-[20px] text-[14px] hover:text-[#BC8246] duration-200 mt-[6px]">
          {product?.name}
        </h2>
        <div className="flex items-center justify-between">
          <div className="price mt-1 flex items-center gap-1.5 tranfsorm  group-hover:-translate-x-50 duration-200">
            <span className="text-[#201f1f] text-[14px] font-normal">
              {product?.DiscountPrice}
            </span>
            <span className="text-[#c3c3c3] text-[14px] font-normal">
              {product?.Price}
            </span>
          </div>
          <p className="border-b border-gray-400 text-[#201f1f] text-[14px] font-medium capitalize transform translate-x-30 group-hover:-translate-x-53 duration-200 hover:text-[#bd8448] cursor-pointer">
            + Add to Cart
          </p>
        </div>
      </div>
      <DetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
      />
    </div>
  );
};

export default Cards;
