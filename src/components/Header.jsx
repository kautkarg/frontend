import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { React, useEffect, useRef, forwardRef } from 'react';
import { Link } from 'react-scroll';

const Header = forwardRef((props, ref) => {
  const headerRef = useRef();
  const buttonRef = useRef();
  const navItemsRef = useRef([]);

  const updateButtonColor = (percentage) => {
    const color = `rgb(${Math.min(255, percentage * 2)}, ${Math.max(0, 255 - percentage * 2)}, 0)`;
    buttonRef.current.style.backgroundColor = color;
  };

  useGSAP(() => {
    gsap.from(headerRef.current, {
      x: -200,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(navItemsRef.current, {
      delay: 0.8,
      stagger: 0.1,
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(buttonRef.current, {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.75)",
    });
  });

  return (
    <div className="fixed w-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg z-20">
      <header className="flex flex-wrap justify-between items-center py-4 px-6 md:px-20">
        {/* Logo */}
        <h1 ref={headerRef} className="text-xl md:text-2xl font-bold text-white">
          Univens
        </h1>

        {/* Navigation */}
        <nav ref={ref} className="hidden md:block">
          <ul className="flex space-x-6">
            {['home', 'testimonials', 'features', 'process', 'comparison', 'faq'].map((item, index) => (
              <li
                key={item}
                ref={(el) => (navItemsRef.current[index] = el)}
                className="transition-all duration-300 hover:scale-110"
              >
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className="text-white hover:text-blue-300 font-medium cursor-pointer"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button
            ref={buttonRef}
            className="text-white text-lg font-bold border-2 border-white px-4 py-2 rounded-lg"
          >
            Menu
          </button>
        </div>

        {/* Contact Button */}
        <button
          ref={buttonRef}
          className="hidden md:block bg-white text-blue-900 font-medium px-6 py-3 rounded-full shadow-lg hover:bg-blue-200 transition-all duration-300"
        >
          Contact Us
        </button>
      </header>

      {/* Mobile Navigation Dropdown */}
      <div className="md:hidden bg-white shadow-md p-4 rounded-lg">
        <ul className="flex flex-col space-y-4">
          {['home', 'testimonials', 'features', 'process', 'comparison', 'faq'].map((item, index) => (
            <li
              key={item}
              ref={(el) => (navItemsRef.current[index] = el)}
              className="text-center transition-all duration-300 hover:scale-105"
            >
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Header;
