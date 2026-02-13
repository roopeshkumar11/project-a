import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen pt-28 px-6 bg-white">

      <motion.h1
      initial={{opacity:0, y:-40}}
      animate={{opacity:1, y:0}}
      className="text-4xl font-bold text-center text-green-700">
        Contact Us
      </motion.h1>

      <motion.form
      initial={{opacity:0, y:50}}
      animate={{opacity:1, y:0}}
      className="max-w-xl mx-auto mt-12 bg-green-50 p-8 rounded-2xl shadow-lg space-y-4">

        <input type="text" placeholder="Your Name"
        className="w-full p-3 rounded-lg border outline-none"/>

        <input type="email" placeholder="Your Email"
        className="w-full p-3 rounded-lg border outline-none"/>

        <textarea placeholder="Message"
        className="w-full p-3 rounded-lg border outline-none h-32"/>

        <motion.button
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        className="w-full bg-green-600 text-white py-3 rounded-lg">
          Send Message
        </motion.button>

      </motion.form>

    </div>
  );
};

export default Contact;
