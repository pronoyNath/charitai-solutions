import { curve } from "../../../assets";

import SolutionCard from "./SolutionCard";
import {
  MessageSquare,
  BarChart3,
  Users,
  Brain,
  Settings,
  Zap,
  Code,
  Mic,
} from "lucide-react";

const solutions = [
  {
    id: "1",
    title: "AI Powered Chatbots",
    description:
      "Enhance customer engagement with intelligent, automated conversations that feel natural and human-like.",
    icon: <MessageSquare size={40} />,
  },
  {
    id: "2",
    title: "AI in Marketing & Sales",
    description:
      "Optimize campaigns, personalize customer experiences, and predict buyer behavior to boost conversion rates.",
    icon: <BarChart3 size={40} />,
  },
  {
    id: "3",
    title: "AI-Powered Data Analytics",
    description:
      "Transform raw data into actionable insights that drive smarter business decisions and strategic planning.",
    icon: <BarChart3 size={40} />,
  },
  {
    id: "4",
    title: "AI for HR & Workforce",
    description:
      "Streamline recruitment, enhance employee engagement, and optimize workforce management with AI solutions.",
    icon: <Users size={40} />,
  },
  {
    id: "5",
    title: "AI Strategy & Consulting",
    description:
      "Get expert guidance on implementing AI across your organization to maximize ROI and competitive advantage.",
    icon: <Brain size={40} />,
  },
  {
    id: "6",
    title: "AI Integration & Automation",
    description:
      "Seamlessly integrate AI capabilities into your existing systems and automate complex business processes.",
    icon: <Settings size={40} />,
  },
  {
    id: "7",
    title: "AI Software Development",
    description:
      "Custom AI software tailored to your specific business needs and technical requirements.",
    icon: <Code size={40} />,
  },
  {
    id: "8",
    title: "AI Voice Agent",
    description:
      "Advanced voice recognition and synthesis technologies for natural, efficient voice-based interactions.",
    icon: <Mic size={40} />,
  },
];

const OurBuinessSoultions = () => {
  return (
    <section
      id="solutions"
      className="py-12 relative overflow-hidden px-4 bg-white"
    >
      {/* Background decoration */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-gradient-secondary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl"></div>

      <div className=" mx-auto px-4 relative z-10">
        <div className="max-w-lg mx-auto text-center mb-16">
          <div className="inline-block relative text-center ">
            <h3 className="text-4xl font-semibold py-5">Our Solutions</h3>
            <img
              src={curve}
              className="absolute top-full left-0 w-full xl:-mt-2 -mt-4"
              width={624}
              height={28}
              alt="Curve"
            />
          </div>
          <p className="text-gray-600 leading-relaxed mt-5">
            We offer a comprehensive range of AI solutions designed to address
            diverse business challenges and drive innovation across industries.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-6">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              id={solution.id}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBuinessSoultions;
