import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <motion.section
      id="getstarted"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="text-center py-16 px-6 bg-gradient-to-r from-[#A643E6] to-[#F76D3D] text-white  my mx shadow-lg"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-3xl md:text-4xl font-semibold mb-4"
      >
        Ready to transform your preventive care workflow?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="max-w-2xl mx-auto mb-10 text-white/90"
      >
        Book a personalised demo or start a free trial and see how our Agentic
        AI Suite can simplify and elevate your operations.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="flex flex-wrap justify-center gap-4"
      >
        {/* Primary Button */}
         <motion.a
            href="#demo"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-[12px] px-6 py-3 font-semibold bg-gradient-to-r from-[#855afc] to-[#0ea5e9] text-white"
          >
           Book a Demo <span>→</span>
          </motion.a>

        {/* Secondary Button */}
         {/* Second Button */}
         <Link to='/industries'>
          <motion.a
            href="https://forms.gle/WXd75AEmrViwKVPY6"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-[12px] px-6 py-3 font-semibold border border-[#855afc] text-white bg-transparent"
          >
            Start free trial <span>→</span>
          </motion.a>
         </Link>
      </motion.div>
    </motion.section>
  );
};

export default CtaSection;
