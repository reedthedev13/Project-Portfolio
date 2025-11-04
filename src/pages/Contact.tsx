import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-6 md:px-24 py-20 bg-gray-800 text-white flex flex-col items-center justify-center"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Contact Me
      </motion.h2>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-2xl bg-gray-900 rounded-xl shadow-lg p-8"
      >
        <form
          action="mailto:reed@example.com"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
          />
          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-indigo-500 rounded-lg text-white font-medium shadow-lg hover:bg-indigo-600 transition"
          >
            Send Message
          </button>
        </form>

        {/* Alternative Contact Options */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center text-gray-300 text-sm">
          <a
            href="mailto:reedlathropbiz@gmail.com"
            className="hover:text-white transition"
          >
            📧 reedlathropbiz@gmail.com
          </a>
          <a
            href="https://calendly.com/reedlathropbiz/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            📅 Schedule a Call
          </a>
        </div>
      </motion.div>
    </section>
  );
};
