import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-[#f8f8f8]">
        <h1 className="text-[120px] font-bold text-[#323232] mb-4">404</h1>
        <h2 className="text-[30px] font-semibold text-[#323232] mb-2">
          Page Not Found
        </h2>
        <p className="text-[16px] text-[#666666] mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to={"/"}
          className="px-6 py-3 bg-[#323232] text-white font-semibold rounded-lg hover:bg-[#555555] transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
