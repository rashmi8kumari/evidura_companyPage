import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import "./ContactForm.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xrbyknjo"); // <-- replace with your own Form ID

  return (
    <section className="contact-section">
      <h2>Contact Us</h2>

      {state.succeeded ? (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: "#00e676", fontWeight: "bold", marginTop: "2rem" }}
        >
          ✅ Thank you! Your message has been sent successfully.
        </motion.p>
      ) : (
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      )}
    </section>
  );
};

export default ContactForm;

