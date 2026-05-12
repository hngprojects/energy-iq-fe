import Image from "next/image"

export default function Contact() {
  return (
    <section className="flex min-h-screen flex-col bg-white">
      {/* Hero Section with Background Image */}
      <div className="relative flex h-[350px] w-full items-center justify-center overflow-hidden md:h-[450px]">
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
        <div className="relative z-10 flex max-w-3xl flex-col items-center px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">Contact us</h1>
          <p className="text-sm leading-relaxed text-gray-300 md:text-base">
            Have questions about your data or need help optimizing your dashboard?
            <br className="hidden md:block" />
            Our team is ready to provide the technical support and insights you need.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="mx-auto w-full max-w-4xl px-6 py-12 md:py-16">
        <form className="flex flex-col gap-6" aria-label="Contact support form">
          {/* First Name & Last Name Row */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName" className="text-sm font-semibold text-gray-700">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                className="rounded-md border border-gray-200 px-4 py-3 text-gray-900 transition-shadow placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-amber-500 focus:outline-none"
                required
                aria-required="true"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName" className="text-sm font-semibold text-gray-700">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                className="rounded-md border border-gray-200 px-4 py-3 text-gray-900 transition-shadow placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-amber-500 focus:outline-none"
                required
                aria-required="true"
              />
            </div>
          </div>

          {/* Email & Phone Number Row */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@gmail.com"
                className="rounded-md border border-gray-200 px-4 py-3 text-gray-900 transition-shadow placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-amber-500 focus:outline-none"
                required
                aria-required="true"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className="rounded-md border border-gray-200 px-4 py-3 text-gray-900 transition-shadow placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Message Area */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Leave us a message"
              className="resize-y rounded-md border border-gray-200 px-4 py-3 text-gray-900 transition-shadow placeholder:text-gray-400 focus:border-transparent focus:ring-2 focus:ring-amber-500 focus:outline-none"
              required
              aria-required="true"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-2 flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-[#f5a623] px-8 py-3 font-medium text-gray-900 transition-colors hover:bg-[#e0961d] focus:ring-2 focus:ring-[#f5a623] focus:ring-offset-2 focus:outline-none"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
