import { Link, Links } from "react-router-dom";
const Header = () => {
  function scrollChangeHeader() {
    const header = document.querySelector(".sticky");
    if (window.scrollY >= 80) {
      header.classList.add("bg-white", "shadow-md");
      header.classList.remove("bg-[#F6F6F6]", "py-[30px]");
    } else {
      header.classList.remove("bg-white", "shadow-md");
      header.classList.add("bg-[#F6F6F6]");
    }
  }
  window.addEventListener("scroll", scrollChangeHeader);

  return (
    <div className="sticky top-0 bg-[#F6F6F6] z-[9999]">
      <div className="mx-auto px-[10px] max-w-[1320px] py-[30px] bg-transparent">
        <div className="flex items-center justify-between">
          <div className="w-[150px] flex-shrink-0">
            <img
              src="https://vela-kazan.myshopify.com/cdn/shop/files/logo_dark.svg?v=1676480977&width=409"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center gap-8">
              {["Home", "Shop", "Product", "Collections", "Blog", "Pages"].map(
                (item) => (
                  <li
                    key={item}
                    className="text-[#a3a3a3] hover:text-[#323232] text-[14px] font-medium leading-[26px] flex items-center gap-1 cursor-pointer"
                  >
                    {item} <i className="ri-arrow-down-s-line text-[14px]"></i>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-[#201f1f] text-[14px] font-normal cursor-pointer">
                <svg
                  className="icon icon-search text-black"
                  width="22"
                  height="24"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z" />
                </svg>
                Search
              </div>

              <div className="flex items-center gap-1.5 text-[#201f1f] text-[14px] font-normal cursor-pointer">
                <svg
                  className="icon icon-cart me-1"
                  width="19"
                  height="20"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M448,160h-64v-4.5C384,87,329,32,260.5,32h-8C184,32,128,87,128,155.5v4.5H64L32,480h448L448,160z M160,155.5c0-50.7,41.8-91.5,92.5-91.5h7.5h0.5c50.7,0,91.5,40.8,91.5,91.5v4.5H160V155.5z M67.8,448l24.9-256H128v36.3c-9.6,5.5-16,15.9-16,27.7c0,17.7,14.3,32,32,32s32-14.3,32-32c0-11.8-6.4-22.2-16-27.7V192h192v36.3c-9.6,5.5-16,15.9-16,27.7c0,17.7,14.3,32,32,32s32-14.3,32-32c0-11.8-6.4-22.2-16-27.7V192h35.4l24.9,256H67.8z" />
                </svg>
                Cart
              </div>
            </div>

            <div className=" cursor-pointer relative group">
              <svg
                className="icon icon-hamburger"
                width="15"
                height="15"
                viewBox="0 0 1024 896"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M27 130q-4-4-7-9t-4-10.5T15 98q0-19 12-31t31-12h913q19 0 31 12t12 31t-12 31.5t-31 12.5H58q-19 0-31-12zm975 285q12 12 12 31t-12 31t-31 12H58q-19 0-31-12q-2-2-4-5t-3.5-6t-2.5-6t-1.5-6.5t-.5-7.5q0-19 12-31t31-12h913q19 0 31 12zm0 347q12 12 12 31t-12 31.5t-31 12.5H58q-19 0-31-12q-2-2-3.5-4.5l-3-5l-2.5-5l-2-5.5l-1-5.5V793q0-19 12-31t31-12h913q18 0 31 12z" />
              </svg>
              <div className="absolute top-3 left-0 hidden group-hover:flex bg-white px-6 shadow-md h-[100px]  items-center justify-center rounded-2xl">
                <ul className="flex flex-col items-start gap-3.5">
                  <Link to={"/login"}>
                    <li className="hover:text-red-500 duration-300 cursor-pointer">
                      Login
                    </li>
                  </Link>
                  <Link to={"/register"}>
                    <li className="hover:text-red-500 duration-300 cursor-pointer">
                      Register
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
