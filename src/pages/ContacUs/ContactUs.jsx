import { useState } from 'react'


function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      setError('Please fill in all required fields')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address')
      return
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/
    if (!phoneRegex.test(formData.phone)) {
      setError('Please enter a valid phone number')
      return
    }

    // Success
    setSubmitted(true)
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
            <p className="text-gray-600">
              Your consultation call has been scheduled. We'll send you a confirmation email shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false)
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  date: '',
                  time: '',
                  message: ''
                })
              }}
              className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Schedule Another Call
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24">
      

      {/* Main Content */}
      <main className="max-w-7xl mx-auto pb-12 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="max-w-3xl mx-auto">
            {/* Book Call Section */}
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden ">
              <div className="px-8 py-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  Schedule a Free Consultation Call
                </h2>
                
                {/* Introduction Text */}
                <p className="text-lg text-gray-600 mb-8 text-center">
                  Take the first step towards transforming your business with AI solutions.
                  Book your free consultation today!
                </p>

                {/* Error Message */}
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                    {error}
                  </div>
                )}

                {/* Booking Form */}
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {/* Name Field */}
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border border block w-full px-4 py-3 text-base rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border block w-full px-4 py-3 text-base rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Phone Field */}
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border block w-full px-4 py-3 text-base rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Preferred Date */}
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="border block w-full px-4 py-3 text-base rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Preferred Time */}
                    <div className="col-span-2 sm:col-span-1">
                      <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <input
                        type="time"
                        name="time"
                        id="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="border block w-full px-4 py-3 text-base rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tell us about your project
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="border block w-full px-4 py-3 text-base rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                      placeholder="Share your project requirements or any specific questions you'd like to discuss..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-3 px-8 text-lg font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all hover:scale-105 shadow-lg"
                    >
                      Schedule Your Call
                    </button>
                  </div>
                </form>

                {/* Additional Information */}
                <div className="mt-10 text-center space-y-3">
                  <p className="text-gray-600">
                    Our team will confirm your appointment within 24 hours
                  </p>
                  <p className="text-gray-600">
                    For urgent inquiries, please contact us at{' '}
                    <a href="mailto:info@charitaisolutions.com" className="text-blue-600 hover:text-blue-800 font-medium">
                    info@charitaisolutions.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ContactUs