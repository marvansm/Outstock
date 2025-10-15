import React from "react";

const HeadingText = ({ title, desc }) => {
  return (
    <div className=" mx-auto max-w-[1320px] px-[10px] my-[200px]">
      <div className="flex items-center justify-between">
        <div className="w-[350px] border-t border-gray-200"></div>
        <div className="flex items-center flex-col pt-[40px]">
          <h2 className="text-[36px] leading-[36px] font-normal text-[#201f1f] mb-[10px]">
            {title}
          </h2>
          <p className="text-[14px] font-normal leading-[1.715] text-[#606060] max-w-[570px]">
            {desc}
          </p>
        </div>
        <div className="w-[350px] border-t border-gray-200"></div>
      </div>
    </div>
  );
};

export default HeadingText;
