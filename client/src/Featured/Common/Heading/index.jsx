const HeadingText = ({ title, desc }) => {
  return (
    <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="w-full sm:w-[150px] lg:w-[350px] border-t border-gray-200 mb-4 sm:mb-0"></div>

        <div className="flex flex-col items-center text-center px-2 sm:px-4 lg:px-0">
          <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] leading-[28px] sm:leading-[32px] lg:leading-[36px] font-normal text-[#201f1f] mb-2 sm:mb-3 lg:mb-[10px]">
            {title}
          </h2>
          <p className="text-[12px] sm:text-[13px] lg:text-[14px] font-normal leading-[1.5] sm:leading-[1.6] lg:leading-[1.715] text-[#606060] max-w-[100%] sm:max-w-[400px] lg:max-w-[570px]">
            {desc}
          </p>
        </div>

        <div className="w-full sm:w-[150px] lg:w-[350px] border-t border-gray-200 mt-4 sm:mt-0"></div>
      </div>
    </div>
  );
};

export default HeadingText;
