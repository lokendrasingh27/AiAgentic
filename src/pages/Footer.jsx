import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const icons = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      color: "#E4405F",
      svg: (
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.5.5.2.8.5 1.2.9.3.3.7.7.9 1.2.2.4.4 1 .5 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.5 2.2-.2.5-.5.8-.9 1.2-.3.3-.7.7-1.2.9-.4.2-1 .4-2.2.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.5a3.4 3.4 0 0 1-1.2-.9 3.4 3.4 0 0 1-.9-1.2c-.2-.4-.4-1-.5-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.5-2.2.2-.5.5-.8.9-1.2.3-.3.7-.7 1.2-.9.4-.2 1-.4 2.2-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.8.1-1 .1-1.6.2-2 .4-.5.2-.8.4-1.2.8-.3.3-.6.7-.8 1.2-.2.4-.3 1-.4 2-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.6.4 2 .2.5.4.8.8 1.2.3.3.7.6 1.2.8.4.2 1 .3 2 .4 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1-.1 1.6-.2 2-.4.5-.2.8-.4 1.2-.8.3-.3.6-.7.8-1.2.2-.4.3-1 .4-2 .1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.6-.4-2a3 3 0 0 0-.8-1.2 3 3 0 0 0-1.2-.8c-.4-.2-1-.3-2-.4-1.3-.1-1.7-.1-4.8-.1zm0 3.2a5.8 5.8 0 1 1 0 11.6 5.8 5.8 0 0 1 0-11.6zm0 9.6a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6zm5.9-10.9a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0z" />
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/your-number",
      color: "#25D366",
      svg: (
        <path d="M17.5 6.5a8.8 8.8 0 0 0-13.7 10L3 20l3.7-1.2a8.8 8.8 0 0 0 4.2 1c4.9 0 8.8-3.9 8.8-8.8 0-2.4-.9-4.6-2.6-6.3zM11 18.3c-1.3 0-2.5-.3-3.7-.9l-.3-.1-2.2.7.7-2.1-.1-.3A7 7 0 1 1 18 11a7 7 0 0 1-7 7.3zm4.1-5.2c-.2-.1-1.3-.6-1.5-.7s-.3-.1-.5.1-.6.7-.7.8-.3.1-.5 0c-.2-.1-.9-.3-1.7-1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.3.1-.4.1-.1.2-.3.3-.4s.1-.2.2-.3c.1-.1.1-.2 0-.3l-.6-1.5c-.2-.4-.4-.4-.5-.4h-.4a.8.8 0 0 0-.6.3c-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.5 2.4 3.8 3.3.5.2.9.3 1.2.4.5.1.9.1 1.3.1.4 0 1.3-.2 1.4-.7.1-.3.1-.5.1-.6 0-.2-.1-.3-.3-.4z" />
      ),
    },
    {
      name: "Email",
      href: "mailto:support@agenticai.com",
      color: "#D44638",
      svg: (
        <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm2 0v.2l8 5 8-5V6H4zm0 2.8V18h16V8.8l-8 5-8-5z" />
      ),
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-10 ">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4 text-lg font-medium">
          © 2025 Agentic AI Suite. All rights reserved.
        </p>
        <p className="text-gray-400 mb-6">
          Simplifying preventive healthcare with intelligent automation.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          {icons.map((icon, index) => (
            <motion.a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                rotate: 5,
                boxShadow: `0px 0px 12px ${icon.color}`,
              }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={icon.color}
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                {icon.svg}
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
