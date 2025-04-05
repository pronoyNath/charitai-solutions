import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import {
  MessageSquare,
  BarChart3,
  Users,
  Brain,
  Settings,
  Code,
  Mic,
} from "lucide-react";
function SolutionDetails() {
  const { id } = useParams();
  
    const solutions = [
      {
        "id": "1",
        "title": "AI Powered Chatbots",
        "subtitle": "Next-generation conversational AI",
        "heroImage": "https://plus.unsplash.com/premium_photo-1725985758385-d5462d6e7f50?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "Enhance customer engagement with intelligent, automated conversations that feel natural and human-like. Our AI chatbots leverage cutting-edge technology to provide seamless customer support.",
        "features": [
          {
            "title": "Natural Language Processing",
            "description": "Advanced NLP capabilities for understanding and responding to user queries naturally."
          },
          {
            "title": "24/7 Availability",
            "description": "Always-on support to handle customer inquiries at any time of day."
          },
          {
            "title": "Multi-language Support",
            "description": "Communicate with customers in their preferred language for better engagement."
          },
          {
            "title": "Analytics Dashboard",
            "description": "Detailed insights into customer interactions and chatbot performance."
          }
        ],
        "specifications": [
          {
            "name": "Response Time",
            "value": "< 100ms"
          },
          {
            "name": "Accuracy Rate",
            "value": "98.5%"
          },
          {
            "name": "Supported Languages",
            "value": "100+"
          },
          {
            "name": "Integration Time",
            "value": "< 30 minutes"
          }
        ]
      },
      {
        "id": "2",
        "title": "AI in Marketing & Sales",
        "subtitle": "Data-driven customer engagement",
        "heroImage": "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        "description": "Optimize campaigns, personalize customer experiences, and predict buyer behavior to boost conversion rates with our AI-powered marketing solutions.",
        "features": [
          {
            "title": "Customer Segmentation",
            "description": "Automatically identify and target specific customer groups with tailored messaging."
          },
          {
            "title": "Predictive Analytics",
            "description": "Forecast sales trends and customer behavior with high accuracy."
          },
          {
            "title": "Personalization Engine",
            "description": "Deliver unique experiences to each customer based on their preferences."
          },
          {
            "title": "ROI Optimization",
            "description": "Maximize your marketing spend efficiency with AI-driven recommendations."
          }
        ],
        "specifications": [
          {
            "name": "Conversion Lift",
            "value": "30-50%"
          },
          {
            "name": "Campaign Optimization",
            "value": "Real-time"
          },
          {
            "name": "Data Sources",
            "value": "Unlimited"
          },
          {
            "name": "Implementation",
            "value": "2-4 weeks"
          }
        ]
      },
      {
        "id": "3",
        "title": "AI-Powered Data Analytics",
        "subtitle": "Transform data into decisions",
        "heroImage": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "Transform raw data into actionable insights that drive smarter business decisions and strategic planning with our advanced analytics platform.",
        "features": [
          {
            "title": "Automated Reporting",
            "description": "Generate comprehensive reports without manual intervention."
          },
          {
            "title": "Predictive Modeling",
            "description": "Forecast trends and outcomes with machine learning algorithms."
          },
          {
            "title": "Data Visualization",
            "description": "Interactive dashboards that make complex data understandable."
          },
          {
            "title": "Anomaly Detection",
            "description": "Automatically identify unusual patterns in your data streams."
          }
        ],
        "specifications": [
          {
            "name": "Processing Speed",
            "value": "Million rows/sec"
          },
          {
            "name": "Data Sources",
            "value": "100+ connectors"
          },
          {
            "name": "Accuracy",
            "value": "99.9%"
          },
          {
            "name": "Setup Time",
            "value": "< 1 week"
          }
        ]
      },
      {
        "id": "4",
        "title": "AI for HR & Workforce",
        "subtitle": "Smarter human resources",
        "heroImage": "https://plus.unsplash.com/premium_photo-1710118990459-07ad42731385?q=80&w=2734&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "Streamline recruitment, enhance employee engagement, and optimize workforce management with AI solutions designed for HR professionals.",
        "features": [
          {
            "title": "Candidate Screening",
            "description": "Automatically identify top candidates from large applicant pools."
          },
          {
            "title": "Employee Sentiment",
            "description": "Understand team morale through natural language analysis."
          },
          {
            "title": "Retention Prediction",
            "description": "Identify flight risks before they decide to leave."
          },
          {
            "title": "Skills Mapping",
            "description": "Visualize organizational capabilities and gaps."
          }
        ],
        "specifications": [
          {
            "name": "Screening Speed",
            "value": "1000 CVs/hour"
          },
          {
            "name": "Accuracy",
            "value": "95%"
          },
          {
            "name": "Integration",
            "value": "All major HRIS"
          },
          {
            "name": "Deployment",
            "value": "Cloud/On-prem"
          }
        ]
      },
      {
        "id": "5",
        "title": "AI Strategy & Consulting",
        "subtitle": "Expert guidance for AI adoption",
        "heroImage": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
        "description": "Get expert guidance on implementing AI across your organization to maximize ROI and competitive advantage through our strategic consulting services.",
        "features": [
          {
            "title": "Roadmap Development",
            "description": "Create a customized AI adoption plan for your business."
          },
          {
            "title": "Use Case Identification",
            "description": "Pinpoint where AI can deliver the most value."
          },
          {
            "title": "Vendor Selection",
            "description": "Choose the right technology partners for your needs."
          },
          {
            "title": "Change Management",
            "description": "Prepare your organization for AI transformation."
          }
        ],
        "specifications": [
          {
            "name": "Consultants",
            "value": "PhD-level"
          },
          {
            "name": "Methodology",
            "value": "Proven framework"
          },
          {
            "name": "Engagements",
            "value": "4-12 weeks"
          },
          {
            "name": "ROI Analysis",
            "value": "Included"
          }
        ]
      },
      {
        "id": "6",
        "title": "AI Integration & Automation",
        "subtitle": "Seamless system connectivity",
        "heroImage": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
        "description": "Seamlessly integrate AI capabilities into your existing systems and automate complex business processes with our integration expertise.",
        "features": [
          {
            "title": "API Connectivity",
            "description": "Connect any system with our robust integration framework."
          },
          {
            "title": "Workflow Automation",
            "description": "Eliminate manual processes with intelligent automation."
          },
          {
            "title": "Legacy Modernization",
            "description": "Bring new life to older systems with AI enhancements."
          },
          {
            "title": "Real-time Sync",
            "description": "Keep all systems updated with the latest information."
          }
        ],
        "specifications": [
          {
            "name": "Integration Time",
            "value": "50% faster"
          },
          {
            "name": "Systems Supported",
            "value": "500+"
          },
          {
            "name": "Uptime",
            "value": "99.99%"
          },
          {
            "name": "Implementation",
            "value": "2-6 weeks"
          }
        ]
      },
      {
        "id": "7",
        "title": "AI Software Development",
        "subtitle": "Custom AI solutions",
        "heroImage": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
        "description": "Custom AI software tailored to your specific business needs and technical requirements, developed by our team of expert engineers.",
        "features": [
          {
            "title": "Custom Models",
            "description": "Algorithms designed specifically for your use case."
          },
          {
            "title": "Full Stack Development",
            "description": "End-to-end solutions from data to interface."
          },
          {
            "title": "Continuous Learning",
            "description": "Systems that improve over time with new data."
          },
          {
            "title": "Scalable Architecture",
            "description": "Solutions that grow with your business needs."
          }
        ],
        "specifications": [
          {
            "name": "Development Time",
            "value": "4-16 weeks"
          },
          {
            "name": "Languages",
            "value": "Python, Java, etc."
          },
          {
            "name": "Accuracy",
            "value": "Tailored to need"
          },
          {
            "name": "Support",
            "value": "24/7"
          }
        ]
      },
      {
        "id": "8",
        "title": "AI Voice Agent",
        "subtitle": "Natural voice interactions",
        "heroImage": "https://images.unsplash.com/photo-1720962158812-d16549f1e5a3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "description": "Advanced voice recognition and synthesis technologies for natural, efficient voice-based interactions with customers and employees.",
        "features": [
          {
            "title": "Speech Recognition",
            "description": "Accurate transcription in noisy environments."
          },
          {
            "title": "Voice Biometrics",
            "description": "Secure authentication through voice patterns."
          },
          {
            "title": "Multilingual Support",
            "description": "Fluency in dozens of languages and dialects."
          },
          {
            "title": "Emotion Detection",
            "description": "Understand customer sentiment from tone of voice."
          }
        ],
        "specifications": [
          {
            "name": "Accuracy",
            "value": "98%"
          },
          {
            "name": "Response Time",
            "value": "< 500ms"
          },
          {
            "name": "Languages",
            "value": "50+"
          },
          {
            "name": "Integration",
            "value": "Any telephony"
          }
        ]
      }
    ]
  
  const solution = solutions.find((sol) => sol.id === id);
    if (!solution) { 
    return <div>Solution not found</div>;
    }
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Hero Image Section */}
          <div className="w-full h-[300px] relative overflow-hidden">
            <img
              src={solution.heroImage}
              alt={`${solution.title} Interface`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold text-white mb-2"
              >
                {solution.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-100"
              >
                {solution.subtitle}
              </motion.p>
            </div>
          </div>

          {/* Description Section */}
          <div className="px-8 py-6">
            <p className="text-lg text-gray-600 mb-6">
              {solution.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 pb-8">
            {solution.features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Specifications Section */}
          <div className="px-8 pb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
              {solution.specifications.map((spec, index) => (
                <div key={index}>
                  <h4 className="font-medium text-gray-900">{spec.name}</h4>
                  <p className="text-gray-600">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-50 px-8 py-6 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ready to transform your business with AI?
                </h3>
                <p className="text-gray-600">Start your free trial today</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  type="submit"
                  className="flex justify-center gap-2 items-center mx-auto text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border rounded-full group"
                >
                  Book Now
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
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SolutionDetails;
