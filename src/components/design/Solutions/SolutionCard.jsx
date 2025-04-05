import { nav } from "framer-motion/client";
import { useNavigate } from "react-router-dom";



const SolutionCard = ({ id,title, description, index, icon, className = "" }) => {
  const navigate = useNavigate();
  return (
    <div 
      className={`relative group rounded-xl p-1 animated-scale  ${className} `}
      style={{ '--card-index': index }}
    >
      <div className="absolute  -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
      <div className="border border-gray-200 relative bg-white/70 backdrop-blur-md rounded-xl p-6 flex flex-col h-full  shadow-lg transition-all duration-300 hover:shadow-xl">
        <div className="mb-4 text-indigo-600">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <button
            type="submit"
            className="flex justify-center gap-2 items-center mx-auto  text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border rounded-full group"
            onClick={() => navigate(`/solutions/${id}`)}
          >
            Learn More
            <svg
              className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-gray-800 group-hover:fill-gray-800"
              ></path>
            </svg>
          </button>
      </div>
    </div>
  );
};

export default SolutionCard;
