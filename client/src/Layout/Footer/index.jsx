const Footer = () => {
  return (
    <footer className="bg-[#232323] text-gray-300 py-[70px]">
      <div className="mx-auto px-[10px] max-w-[1320px] py-[30px]">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <div>
              <img
                className="w-[150px]"
                src="https://vela-kazan.myshopify.com/cdn/shop/files/logo_color.svg?v=1676480977&width=150"
                alt=""
              />
            </div>

            <p className="mt-8 leading-relaxed text-[#6c6c6c] text-[14px] max-w-[640px]">
              Outstock is a premium Templates theme with advanced admin module.
              It’s extremely customizable, easy to use and fully responsive and
              retina ready.
            </p>

            <ul className="space-y-3 text-sm mt-6">
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-line text-[#6c6c6c] text-[14px]"></i>
                <span className="text-[#6c6c6c]">
                  1234 Heaven Stress, Beverly Hill, Melbourne, USA.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-phone-line text-[#6c6c6c] text-[14px]"></i>
                <span className="text-[#6c6c6c]">
                  Phone Number: (800) 123 456 789
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-mail-line text-[#6c6c6c] text-[14px]"></i>
                <span className="text-[#6c6c6c]">
                  Mail: outstock@support.com
                </span>
              </li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <h3 className="text-white text-base font-semibold tracking-wide">
              INFORMATION
            </h3>
            <ul className="mt-5 space-y-3 text-[14px] text-[#6c6c6c]">
              <li>
                <a href="#" className="hover:text-[#bd8448] transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#bd8448] transition">
                  Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#bd8448] transition">
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#bd8448] transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#bd8448] transition">
                  Terms &amp; Condition
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <h3 className="text-white text-base font-semibold tracking-wide">
              OUR SERVICES
            </h3>
            <ul className="mt-5 space-y-3 text-[14px] text-[#6c6c6c]">
              <li>
                <a href="#" className="hover:text-[#bd8448] transition">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#bd8448] transition">
                  Help &amp; Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#bd8448] transition">
                  Returns &amp; Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#bd8448] transition">
                  Online Stores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#bd8448] transition">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-white/10"></div>

      <div className="mx-auto max-w-[1320px] px-[10px] py-10 flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-between">
        <p className="text-xs text-gray-400">
          Copyright © Outstock. All rights reserved.
        </p>

        <div className="flex items-center gap-3 text-gray-300">
          <a href="#" className="hover:text-[#f97316] transition text-lg">
            <i className="ri-facebook-fill"></i>
          </a>
          <a href="#" className="hover:text-[#f97316] transition text-lg">
            <i className="ri-twitter-x-line"></i>
          </a>
          <a href="#" className="hover:text-[#f97316] transition text-lg">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="#" className="hover:text-[#f97316] transition text-lg">
            <i className="ri-youtube-fill"></i>
          </a>
          <a href="#" className="hover:text-[#f97316] transition text-lg">
            <i className="ri-linkedin-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
