import Image from "next/image";

export default function Contact() {
  return (
    <section className="flex flex-col min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <Image
          src="/demo.png"
          alt="Contact hero background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay to ensure text contrast and readability */}
        <div className="absolute inset-0 bg-slate-900/80"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Contact us
          </h1>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Have questions about your data or need help optimizing your
            dashboard?
            <br className="hidden md:block" />
            Our team is ready to provide the technical support and insights you
            need.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-4xl mx-auto px-6 py-12 md:py-16">
        <form
          className="flex flex-col gap-6"
          aria-label="Contact support form"
        >
          {/* First Name & Last Name Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="firstName"
                className="text-sm font-semibold text-gray-700"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                className="px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder:text-gray-400 text-gray-900 transition-shadow"
                required
                aria-required="true"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="lastName"
                className="text-sm font-semibold text-gray-700"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                className="px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder:text-gray-400 text-gray-900 transition-shadow"
                required
                aria-required="true"
              />
            </div>
          </div>

          {/* Email & Phone Number Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@gmail.com"
                className="px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder:text-gray-400 text-gray-900 transition-shadow"
                required
                aria-required="true"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-sm font-semibold text-gray-700"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder:text-gray-400 text-gray-900 transition-shadow"
              />
            </div>
          </div>

          {/* Message Area */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Leave us a message"
              className="px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder:text-gray-400 resize-y text-gray-900 transition-shadow"
              required
              aria-required="true"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              className="bg-[#f5a623] hover:bg-[#e0961d] text-gray-900 font-medium py-3 px-8 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f5a623]"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}