import { companyLogos } from "../../components/constants";
import { curve } from "../../assets";

const Sponsors = () => {
  return (
    <div className="">
      
      <div className="flex justify-center items-center ">
        <div className="inline-block relative text-center ">
          <h3 className="text-3xl font-semibold py-5">Collaborated With</h3>
          <img
            src={curve}
            className="absolute top-full left-0 w-full xl:-mt-2 -mt-4"
            width={624}
            height={28}
            alt="Curve"
          />
        </div>
      </div>

      <ul className="flex px-4 flex-wrap gap-2 lg:gap-0 w-full max-w-6xl mx-auto">
        {companyLogos.map((logo, index) => (
          <li
            className="flex  items-center justify-center  flex-1 h-[4rem] lg:h-[8.5rem] "
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sponsors;
