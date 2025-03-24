import React from "react";
import SpotlightCard from "../../components/shared/SpotlightCard";

const Solutions = () => {
  const solutionsData = [
    {
      id: "1",
      title: "AI Powered Chatbots",
      description:
        "AI chatbots automate donor engagement, volunteer coordination, and outreach, enhancing nonprofit efficiency and impact.",
    },
    {
      id: "2",
      title: "Predictive Analytics",
      description:
        "Leverage AI to analyze donor behavior and predict future contributions, enabling more effective fundraising strategies.",
    },
    {
      id: "3",
      title: "Personalized Donor Experience",
      description:
        "AI customizes communication and donation requests based on donor preferences, increasing engagement and support.",
    },
    {
      id: "4",
      title: "Volunteer Management Automation",
      description:
        "AI streamlines volunteer recruitment, scheduling, and task assignments, improving operational efficiency and volunteer satisfaction.",
    },
    // {
    //   id: "5",
    //   title: "Fund Allocation Optimization",
    //   description:
    //     "AI optimizes resource distribution by analyzing program effectiveness, ensuring funds are used where they’re needed most.",
    // },
    // {
    //   id: "6",
    //   title: "Impact Measurement and Reporting",
    //   description:
    //     "AI tools help nonprofits measure program outcomes and generate detailed reports, enhancing transparency and donor trust.",
    // },
  ];

  return (
    <div className="">
      <h3 className="px-10 font-semibold max-w-6xl text-3xl mt-10 font-tektur">
        Empowering Your Future with Innovative, Smart, and Reliable AI
        Solutions!
      </h3>
      <div className="grid grid-cols-4 gap-5 py-7 ">
        {solutionsData?.map((data) => (
          <div key={data?.id}>
            <SpotlightCard
              className="custom-spotlight-card bg-white"
              spotlightColor="rgba(153, 102, 255, 0.2)"
            >
              {/* // Content goes here */}
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                mollitia praesentium tempore modi possimus dolor voluptates quos
                esse repudiandae quia!
              </h3>
            </SpotlightCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
