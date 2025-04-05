import { Phone, PhoneOutgoing } from "lucide-react";
import { curve } from "../../../assets";
import BtnCheck from "./BtnCheck";

const BookAppointmentSection = () => {
  return (
    <section id="book-appointment" className="py-24 relative overflow-hidden">
      {/* Glass blur background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-70"></div>

      {/* Animated background circles */}
      <div className="absolute w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-3/4 left-3/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className=" mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative glass-card rounded-2xl p-10 md:p-12 shadow-xl backdrop-blur-md bg-white/80 border border-white/40">
            <div className="text-center">
              <div className="inline-block relative text-center ">
                <h3 className="text-4xl font-semibold py-5">
                  Unlock the potential of your company by embracing AI today!
                </h3>
                
              </div>
              <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                Book a call with our AI experts to discover how we can help
                transform your business with innovative AI solutions tailored to
                your needs.
              </p>
              <div>
              <div className="relative group">
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                <div className="relative z-10 flex items-center space-x-2">
                  <span className="transition-all duration-500 group-hover:translate-x-1 mr-2">
                    Let's shedule a call
                  </span>
                  <Phone size={20} />
                </div>
              </span>
            </button>
          </div>
              </div>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-2 lg:gap-6 text-center">
              {[
                {
                  title: "Personalized Analysis",
                  description:
                    "Get a customized assessment of how AI can address your unique business challenges.",
                },
                {
                  title: "Expert Consultation",
                  description:
                    "Speak directly with our AI specialists who understand your industry needs.",
                },
                {
                  title: "Clear Roadmap",
                  description:
                    "Receive a strategic implementation plan with timeline and expected outcomes.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative p-1  animate-fade-in group"
                  style={{ animationDelay: `${0.4 + index * 0.15}s` }}
                >
                  <div className=" absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur  group-hover:opacity-100 transition duration-500 "></div>
                  <div className="relative hover:shadow-xl cursor-pointer p-6 rounded-xl bg-white/80 backdrop-blur-md shadow-lg border border-white/40 h-full flex flex-col justify-between ">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                        {item.title}
                      </h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                    {/* <button className="p-1 rounded-md border-2 break-words">book now</button> */}
                    <div className="group mt-4">
                    <BtnCheck />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointmentSection;
