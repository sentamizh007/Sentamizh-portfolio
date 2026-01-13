import React from "react";

const Navabar = ({ theme }) => {
  return (
    <nav className="flex relative w-full h-20 md:px-[100px]  items-center overflow-hidden">
      {/* Left background half */}
      <div className="absolute top-0 left-0 w-[30%] h-full md:hidden bg-[#0bccef] z-0" />

      {/* Right background half */}
      <div className="absolute top-0 right-0 w-full h-full bg-[#0bccef] md:bg-transparent z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-shrink-0 items-center ">
        <a href="/">
          <h1
            className={`${
              theme === "dark"
                ? "text-white md:text-yellow-300"
                : " text-white md:text-[#0bccef]"
            } text-xl lg:text-5xl font-extrabold font-dancing`}
          >
            <span
              className={`mx-3 ${
                theme === "dark"
                  ? "md:text-white text-gray-900 "
                  : " md:text-black text-black "
              }`}
            >
              Sentamizhselvan
            </span>
            <span
              className={`${
                theme === "dark"
                  ? "text-white md:text-yellow-300"
                  : " text-white md:text-[#0bccef]"
              } text-xl lg:text-5xl font-extrabold font-dancing`}
            >
              S
            </span>
          </h1>
        </a>
      </div>
    </nav>
  );
};

export default Navabar;
