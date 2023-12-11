import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactForm = () => {
  const serviceID = "service_78z4h6u";
  const publicKey = "QI8cuOwcW0TLkLbY8";
  const templateID = "template_tjx9x9m";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        alert("Message sent successfully")
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <>
      <form
        ref={form}
        className="grid grid-cols-1 font-body text-text max-w-[500px]"
        onSubmit={sendEmail}
      >
        <motion.input
          whileFocus={{
            scale: 1.02,
          }}
          type="text"
          className="block p-4 mb-4 border-2 rounded-md outline-none focus:border-accent bg-background border-primary"
          required
          name="from_name"
          placeholder="Name"
        />
        <motion.textarea
          whileFocus={{
            scale: 1.02,
          }}
          name="message"
          className="block p-4 mb-6 border-2 rounded-md outline-none resize-none focus:border-accent bg-background border-primary"
          required
          placeholder="Message"
        />
        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          className="block w-24 h-16 rounded-lg bg-primary"
          type="submit"
        >
          Submit
        </motion.button>
      </form>
    </>
  );
};

export default ContactForm;
