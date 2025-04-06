import logo from "../../assets/logo.png";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 ">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="">
              <div className=" flex  items-center   gap-2">
                <a className="block " href="#hero">
                  <img src={logo} className="h-12" alt="logo" />
                </a>
                <h3 className=" font-semibold">
                  CharitAI
                  <span className="block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Solutions
                  </span>
                </h3>
              </div>
            </div>
            <p className="text-gray-300">
              Transforming businesses through cutting-edge AI solutions and
              expert guidance.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center hover:underline">
                <Mail size={18} className="mr-3 text-purple-300" />
                <span>info@charitaisolutions.com</span>
              </div>
              <div className="flex items-center hover:underline">
                <Phone size={18} className="mr-3 text-purple-300" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center hover:underline">
                <MapPin size={18} className="mr-3 text-purple-300" />
                <span>123 AI Boulevard, Tech City, TC 10101</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#" className="hover:text-purple-300 transition-colors">
                Home
              </a>
              <a
                href="#our-story"
                className="hover:text-purple-300 transition-colors"
              >
                Our Story
              </a>
              <a
                href="#solutions"
                className="hover:text-purple-300 transition-colors"
              >
                Explore AI
              </a>
              <a
                href="#solutions"
                className="hover:text-purple-300 transition-colors"
              >
                Solutions
              </a>
              <a
                href="#book-appointment"
                className="hover:text-purple-300 transition-colors"
              >
                Book a Call
              </a>
              <a href="#" className="hover:text-purple-300 transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Charitai Solutions. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
