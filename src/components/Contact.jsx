import { useState } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null },
    });

    const serviceId = "service_jnvinmu";
    const templateId = "template_ec3vdmc";
    const userId = "qvO_PUqJ5_4mQsxFa";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(() => {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Message sent successfully!" },
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus({
          submitted: false,
          submitting: false,
          info: {
            error: true,
            msg: "An error occurred. Please try again later.",
          },
        });
      });
  };

  return (
    <section id="contact" className="py-20 text-white text-center px-4">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-8">
        Contact Me
      </h2>
      <p className="text-gray-300 text-sm font-medium sm:text-base mb-8 max-w-xl mx-auto">
        I am open to collaboration, new opportunities, and professional
        engagements. Please feel free to reach out—I look forward to connecting
        and discussing how we can work together.
      </p>

      {status.info.msg && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            status.info.error ? "bg-red-500/50" : "bg-green-500/50"
          }`}
        >
          {status.info.msg}
        </div>
      )}

      <div className="flex flex-col lg:flex-row justify-center items-center gap-20 max-w-6xl mx-auto mt-12">
        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-4 w-full border rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition duration-300"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-4 w-full border rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition duration-300"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-4 w-full border rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition duration-300"
            rows="5"
            required
          />
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-70"
            disabled={status.submitting}
          >
            {status.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-x-16 w-full px-4">
          <form
            onSubmit={handleSubmit}
            className="flex-1 space-y-6 max-w-xl w-full"
          ></form>

          <div className="flex-1 space-y-10 max-w-md w-full text-gray-300">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <MdEmail className="text-2xl text-blue-500" />
                <span className="text-lg font-semibold">Email</span>
              </div>
              <a
                href="mailto:sahiliqubal@example.com"
                className="text-sm text-gray-400 hover:text-blue-400 transition duration-300 pl-7"
              >
                sahiliqubal06@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <MdPhone className="text-2xl text-green-600" />
                <span className="text-lg font-semibold">Phone</span>
              </div>
              <a
                href="tel:+919876543210"
                className="text-sm text-gray-400 hover:text-blue-400 transition duration-300 pl-7"
              >
                +91 6287365656
              </a>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2">
                <MdLocationOn className="text-2xl text-red-600" />
                <span className="text-lg font-semibold">Location</span>
              </div>
              <p className="text-sm text-gray-400 pl-7">
                Bangalore - 560035, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
