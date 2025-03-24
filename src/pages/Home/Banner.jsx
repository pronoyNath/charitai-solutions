import { ExternalLink } from "lucide-react";
import React from "react";
import BlurText from "../../components/shared/BlurText";


const Banner = () => {
  return (
    <div className="py-16 space-y-5">
      <div className="flex items-center h-[2.5rem] px-5 bg-[#f1ecfb] rounded-[1.7rem] w-max mx-auto hover:bg-[#ccb8f6]">
        <h1 className=" flex items-center gap-2 font-semibold text-sm text-[#2b1e1e]">
          Smarter. Faster. Limitless.
          <span>
            <ExternalLink size={16} />
          </span>
        </h1>
      </div>
      <div>
        {/* title showing  */}
        <BlurText
          text="Charitai Solutions"
          delay={150}
          animateBy="words"
          direction="top"
          // onAnimationComplete={handleAnimationComplete}
          className="text-7xl mb-8 text-center "
        />
      </div>
      <div className="max-w-4xl mx-auto text-center text-lg">
        <p>
          Unlock the power of cutting-edge AI solutions to automate, optimize,
          and accelerate your growth. Whether its intelligent automation,
          data-driven insights, or seamless integration—we bring AI to life for
          you.
        </p>
      </div>
      {/* call button */}
      <div>
        <div className="flex items-center justify-center mt-10">
          <div className="relative group">
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                <div className="relative z-10 flex items-center space-x-2">
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                    Let's get started
                  </span>
                  <svg
                    className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                    data-slot="icon"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
