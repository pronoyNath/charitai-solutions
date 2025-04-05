import { Brain, Heart, LineChart, Users, Shield, Rocket, Clock, Award, Building2 } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative overflow-hidden ">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:w-full lg:pb-12">
            <main className="mt-28 mx-auto max-w-7xl px-4 sm:mt-28 sm:px-6 md:mt-28 lg:mt-28 lg:px-8 xl:mt-28">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Revolutionizing Nonprofits</span>
                  <span className="block text-indigo-600">with AI Solutions</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                  Empowering organizations to create lasting change through intelligent automation and data-driven insights.
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-indigo-600">Our Mission</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We believe that AI should be accessible, ethical, and mission-driven. By leveraging technology, nonprofits can operate more efficiently, allocate resources effectively, and focus on what truly matters—serving their communities and creating lasting change.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Our Solutions</h2>
            <p className="mt-4 text-lg text-gray-500">Comprehensive AI tools designed for nonprofit success</p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Automated Operations */}
              <div className="pt-6 shadow-lg">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Intelligent Automation</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Streamline operations with AI-powered workflow automation, reducing manual tasks and improving efficiency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Donor Engagement */}
              <div className="pt-6 shadow-lg">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Donor Engagement</h3>
                    <p className="mt-5 text-base text-gray-500">
                      AI-driven personalization and chatbots for enhanced donor communication and support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="pt-6 shadow-lg">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                      <LineChart className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900">Advanced Analytics</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Data-driven insights and predictive analytics to optimize fundraising and impact measurement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose CharitAI</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We combine deep nonprofit expertise with cutting-edge AI technology
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center ">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">Secure & Ethical</h3>
                <p className="mt-2 text-base text-gray-500">
                  Enterprise-grade security with ethical AI practices
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">Dedicated Support</h3>
                <p className="mt-2 text-base text-gray-500">
                  Expert team committed to your success
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">Scalable Solutions</h3>
                <p className="mt-2 text-base text-gray-500">
                  Grow and adapt with your organization
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">Proven Results</h3>
                <p className="mt-2 text-base text-gray-500">
                  Track record of nonprofit success
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Commitment</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              At CharitAI Solutions, we're committed to making AI work for your mission. Let's build a smarter, more impactful future together.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-indigo-500" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">24/7 Support</h3>
                </div>
                <p className="mt-4 text-base text-gray-500">
                  Round-the-clock technical support and monitoring to ensure your systems run smoothly.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <Building2 className="h-6 w-6 text-indigo-500" />
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Industry Expertise</h3>
                </div>
                <p className="mt-4 text-base text-gray-500">
                  Deep understanding of nonprofit challenges and regulatory requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;