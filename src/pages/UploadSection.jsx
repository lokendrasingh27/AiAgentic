import { motion } from "framer-motion";
import React from "react";

const UploadSection = () => {
  const uploadOptions = [
    {
      title: "Text",
      description: "Paste or upload .txt, .docx or .md files.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mint" viewBox="0 0 20 20" fill="currentColor">
          <path d="M4 3a2 2 0 012-2h5.586A2 2 0 0113 1.414l3.586 3.586A2 2 0 0117 6.586V17a2 2 0 01-2 2H6a2 2 0 01-2-2V3z"></path>
          <path d="M13 3.414V7a1 1 0 001 1h3.586L13 3.414z" fill="#0f4c75"></path>
        </svg>
      ),
      input: (
        <>
          <textarea
            className="w-full h-24 rounded-lg bg-brand-800/50 border border-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-mint/50 resize-none"
            placeholder="Paste text here…"
          ></textarea>
          <input
            type="file"
            accept=".txt,.doc,.docx,.md"
            className="mt-3  w-full text-sm file:mr-4 file:rounded-full file:border-0 file:bg-mint/20 file:px-4 file:py-2 file:text-white hover:file:bg-mint/30"
          />
        </>
      ),
    },
    {
      title: "Voice",
      description: "Upload voice notes (.wav, .mp3).",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mint" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a2 2 0 00-2 2v6a2 2 0 004 0V4a2 2 0 00-2-2z"></path>
          <path fillRule="evenodd" d="M5 10a5 5 0 0010 0H5z" clipRule="evenodd"></path>
          <path d="M10 18a7 7 0 007-7h-2a5 5 0 11-10 0H3a7 7 0 007 7z"></path>
        </svg>
      ),
      input: (
        <input
          type="file"
          accept=".wav,.mp3"
          className="block w-full text-sm file:mr-4 file:rounded-full file:border-0 file:bg-mint/20 file:px-4 file:py-2 file:text-white hover:file:bg-mint/30"
        />
      ),
    },
    {
      title: "Video",
      description: "Upload .mp4 or .mov files.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mint" viewBox="0 0 20 20" fill="currentColor">
          <path d="M6 4a2 2 0 00-2 2v8a2 2 0 002 2h5.586a2 2 0 001.414-.586L17 12.414V4a2 2 0 00-2-2H6z"></path>
          <path d="M17 8l3 3-3 3V8z" fill="#0f4c75"></path>
        </svg>
      ),
      input: (
        <input
          type="file"
          accept=".mp4,.mov"
          className="block w-full text-sm file:mr-4 file:rounded-full file:border-0 file:bg-mint/20 file:px-4 file:py-2 file:text-white hover:file:bg-mint/30"
        />
      ),
    },
    {
      title: "Books & PDFs",
      description: "Upload .pdf, .epub or .mobi files.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mint" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M9 4.804A7.968 7.968 0 005.5 4C3.567 4 2 5.232 2 6.667V14c0 1.105 1.79 2 4 2 .432 0 .853-.044 1.25-.125V4.804zM10.75 4.804V15.875c.397.081.818.125 1.25.125 2.21 0 4-.895 4-2V6.667C16 5.232 14.433 4 12.5 4a7.968 7.968 0 00-3.75.804z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      input: (
        <input
          type="file"
          accept=".pdf,.epub,.mobi"
          className="block w-full text-sm file:mr-4 file:rounded-full file:border-0 file:bg-mint/20 file:px-4 file:py-2 file:text-white hover:file:bg-mint/30"
        />
      ),
    },
    {
      title: "Links",
      description: "Share a URL to an external resource (e.g., article, video).",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mint" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12.293 6.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414l4-4z"
            clipRule="evenodd"
          ></path>
          <path
            fillRule="evenodd"
            d="M6 10a3 3 0 00-3 3v4a1 1 0 002 0v-4a1 1 0 011-1h4a1 1 0 010 2H6v4a1 1 0 01-2 0v-4a3 3 0 013-3h4a3 3 0 010 6H6"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      input: (
        <input
          type="url"
          placeholder="https://..."
          className="w-full rounded-lg bg-brand-800/50 border border-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-mint/50 text-sm"
        />
      ),
    },
  ];

  return (
    <section className="mt-12 text-white bg-[url('/images/bgg.jpg')] rounded-2xl bg-cover bg-center font-inter  max-w-7xl mx-auto space-y-12 relative overflow-hidden">
      {/* Background gradient overlay */}
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] opacity-70 -z-10"></div>

      <motion.div
        className="rounded-3xl  rounded-2xl bg-cover bg-center bg-gradient-to-br from-brand-800/70 to-brand-600/50 backdrop-blur-xl border border-white/10 shadow-lg shadow-mint/10 p-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="text-lg font-semibold mb-1">Upload Your Data</h2>
        <p className="text-sm text-white/70 mb-6">
          Add data sources that your agents should learn from. Drag and drop files or click to browse.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {uploadOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.08,
                y: -8,
                boxShadow: "0 0 25px rgba(0,255,200,0.35)",
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                  mass: 0.6,
                },
              }}
              className="dropzone rounded-2xl bg-[#11141 border border-white/10 bg-gradient-to-br from-brand-700/60 to-brand-800/30 p-5 hover:bg-brand-600/40 transition-all duration-150 ease-out"
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-mint/30 to-brand-500/40">
                  {option.icon}
                </div>
                <h3 className="font-semibold text-base">{option.title}</h3>
              </div>
              <p className="text-sm text-white/70 mb-4">{option.description}</p>
              {option.input}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default UploadSection;
