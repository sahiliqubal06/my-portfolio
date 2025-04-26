import { useState } from "react";
import emailjs from "@emailjs/browser";

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
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Message sent successfully!" },
        });
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("FAILED...", error);
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
    <section id="contact" className="py-20 text-white text-center">
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-8">
        Contact Me
      </h2>
      {status.info.msg && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            status.info.error ? "bg-red-500/50" : "bg-green-500/50"
          }`}
        >
          {status.info.msg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-4 w-full border rounded-lg dark:bg-gray-700 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition duration-300"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="p-4 w-full border rounded-lg dark:bg-gray-700 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition duration-300"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="p-4 w-full border rounded-lg dark:bg-gray-700 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 transition duration-300"
          rows="5"
          required
        />
        <button
          type="submit"
          className="cursor-pointer px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-70"
          disabled={status.submitting}
        >
          {status.submitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
