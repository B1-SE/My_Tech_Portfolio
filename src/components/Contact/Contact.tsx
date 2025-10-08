import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_q1i6coa",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_07aots8",
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "qviSdwyUkhbA2k3yq"
      );
      setSent(true);
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Failed to send. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8"
        >
          Contact Me
        </motion.h2>

        {!sent ? (
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-4 bg-gray-900 p-8 rounded-2xl shadow-xl"
          >
            <input
              required
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <input
              required
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <textarea
              required
              name="message"
              placeholder="Your Message"
              className="p-3 rounded-md bg-gray-800 border border-gray-700 h-40 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className={`py-3 rounded-md font-semibold ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 transition"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
            {error && <p className="text-red-400 mt-2">{error}</p>}
          </motion.form>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 text-lg mt-8"
          >
            ✅ Thank you! Your message has been sent successfully.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Contact;
