import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Scroll-to-top logic
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen text-white font-sans bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Section Above Footer */}
      <section className="text-center py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400">
          Ready to Solve Your Business Challenges?
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Contact us today to start crafting your solutions. Whether you need a
          quick fix or a comprehensive solution, we’ve got you covered and
          customized.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="inline-flex items-center space-x-2">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full">
              ✔
            </span>
            <span>Customized Design</span>
          </span>

          <span className="inline-flex items-center space-x-2">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full">
              ✔
            </span>
            <span>Ongoing Support</span>
          </span>

          <span className="inline-flex items-center space-x-2">
            <span className="inline-flex items-center justify-center w-6 h-6 bg-green-600 text-white rounded-full">
              ✔
            </span>
            <span>Fast Delivery</span>
          </span>
        </div>
        <a
          href="#"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition-transform transform hover:scale-105"
        >
          Schedule Your Free Consultation
        </a>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-4 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Univens</h3>
            <p className="text-sm mb-6">
              Univens is here to help you grow your business with fast & reliable
              solutions. Let us take care of the details, so you can focus on what
              matters.
            </p>
            <a
              href="#"
              className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-transform transform hover:scale-105"
            >
              Contact Us →
            </a>
          </div>

          {/* Middle Section */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Join Our Community</h3>
            <p className="italic mb-4">
              "Univens: Where Hustlers Turn Ideas into Reality."
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
                aria-label="LinkedIn"
              >
                {/* LinkedIn Icon */}
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.243c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.243h-3v-4.5c0-1.08-.882-1.96-1.96-1.96h-.08c-1.08 0-1.96.88-1.96 1.96v4.5h-3v-9h3v1.36c.88-.88 2.16-1.36 3.36-1.36h.08c2.42 0 4.4 1.98 4.4 4.4v4.6z" />
                </svg>
              </a>

              {/* More social icons (e.g., Twitter, Instagram) */}
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Back to Top Button */}
        {showScroll && (
          <motion.button
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-500"
            onClick={scrollToTop}
            whileHover={{ scale: 1.2 }}
          >
            ↑
          </motion.button>
        )}
      </footer>
    </div>
  );
};

export default App;
