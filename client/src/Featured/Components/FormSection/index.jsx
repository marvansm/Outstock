import React from "react";
import HeadingText from "../../Common/Heading";

const DiscountSection = () => {
  return (
    <section class="w-full py-20 bg-white border-t border-[#F0F0F0]">
      <div class="mx-auto text-center px-4">
        <HeadingText
          title={"Get Discount Info"}
          desc={
            "Subscribe to the Outstock mailing list to receive updates on new arrivals, special offers and other discount information."
          }
        />

        <form class="w-full mt-18">
          <input
            type="email"
            placeholder="Enter your email..."
            class="w-full border-b border-[#E5E5E5] text-center text-[14px] text-[#555555] focus:outline-none focus:border-black pb-3 placeholder:text-[#aaa] mb-8"
          />

          <button
            type="submit"
            class=" border-black border-2 text-[13px] font-medium py-[18px] px-[60px] hover:border-[#BC8246] hover:text-[#BC8246] transition-all duration-300"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
};

export default DiscountSection;
