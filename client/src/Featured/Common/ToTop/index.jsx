const ToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  function toTopVisible() {
    const scrollBtn = document.querySelector(".scroll");

    if (window.scrollY >= 300) {
      scrollBtn.classList.remove("hidden");
      scrollBtn.classList.add("flex");
    } else {
      scrollBtn.classList.add("hidden");
      scrollBtn.classList.remove("flex");
    }
  }
  window.addEventListener("scroll", toTopVisible);

  return (
    <div className="fixed bottom-10 right-5 z-[99999]">
      <button
        className="scroll bg-[#BC8246] text-white p-2  rotate-[270deg] w-[50px] h-[50px] flex items-center justify-center rounded-full hover:bg-[black] hover:text-white duration-300 cursor-pointer"
        onClick={handleScrollToTop}
      >
        <svg
          width="12px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path
            fill="currentColor"
            d="M363.8 264.5L217 412.5c-4.7 4.7-12.3 4.7-17 0l-19.8-19.8c-4.7-4.7-4.7-12.3 0-17L298.7 256 180.2 136.3c-4.7-4.7-4.7-12.3 0-17L200 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17zm-160-17L57 99.5c-4.7-4.7-12.3-4.7-17 0l-19.8 19.8c-4.7 4.7-4.7 12.3 0 17L138.7 256 20.2 375.7c-4.7 4.7-4.7 12.3 0 17L40 412.5c4.7 4.7 12.3 4.7 17 0l146.8-148c4.7-4.7 4.7-12.3 0-17z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default ToTop;
