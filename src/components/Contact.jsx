import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (using EmailJS or other methods)
  };

  return (
    <section
      id="contact"
      className="relative py-20 text-white text-center overflow-hidden"
    >
      {/* Background Blur Effect */}
      {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-[180px] opacity-20 z-0"></div> */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-[180px] opacity-25 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-transparent z-0" />
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-8">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-4 w-full border rounded-lg dark:bg-gray-700 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-4 w-full border rounded-lg dark:bg-gray-700 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-4 w-full border rounded-lg dark:bg-gray-700 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
