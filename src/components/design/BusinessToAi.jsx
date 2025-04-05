const HeroSection = () => {
  return (
    <section className="py-12 px-10 relative overflow-hidden">
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 items-center pt-8">
        <div
          className="order-2 lg:order-1  animate-slide-in-left shadow-2xl rounded-lg border border-white/20 relative"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-30"></div>
          <img
            src="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="AI Interface"
            className="rounded-lg shadow-xl w-full relative z-10"
          />
        </div>

        <div
          className="order-1 lg:order-2 space-y-6 animate-slide-in-right"
          style={{ animationDelay: "0.8s" }}
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Transform Your Business with AI
          </h2>
          <p className="text-gray-700">
            At Charitai Solutions, we harness the power of artificial
            intelligence to solve complex business challenges and unlock new
            opportunities for growth and innovation.
          </p>
          <ul className="space-y-3">
            {[
              "Custom AI solutions tailored to your needs",
              "Seamless integration with your existing systems",
              "Data-driven insights for smarter decision making",
              "Automate repetitive tasks and focus on growth",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start space-x-2 animated-fade bg-white/50 p-3 rounded-lg backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
                style={{ "--item-index": index }}
              >
                <span className="text-indigo-600 flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
