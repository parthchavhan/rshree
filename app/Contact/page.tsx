// components/Contact.tsx
export default function Contact() {
  return (
    <section className="bg-[#f9f6f2] py-16 px-6 md:px-20 text-[#2e2e2e]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#bfa15b] tracking-wide">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-6">
            We'd love to hear from you. Whether you’re looking for a custom design, collaboration, or just have a question — reach out to us anytime.
          </p>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong className="text-[#bfa15b]">Phone:</strong> +91 98765 43210
            </li>
            <li>
              <strong className="text-[#bfa15b]">Email:</strong> contact@rshreejewels.com
            </li>
            <li>
              <strong className="text-[#bfa15b]">Address:</strong> Rshree Jewels, Anna Nagar, Chennai, India
            </li>
            <li>
              <strong className="text-[#bfa15b]">Hours:</strong> Mon - Sat | 10:00 AM – 8:00 PM
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 shadow-xl rounded-xl space-y-6">
          <h3 className="text-2xl font-semibold text-[#2e2e2e]">Send a Message</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#bfa15b]"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#bfa15b]"
            required
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#bfa15b]"
            required
          />
          <button
            type="submit"
            className="bg-[#bfa15b] hover:bg-[#a78b45] text-white font-medium py-3 px-6 rounded-full transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
