import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const testimonials = [
  {
    text: "‘Univens connected us with the right marketing experts at the perfect time. They made our growth seamless.’",
    name: "Raj",
    role: "Startup Founder",
    image: "/src/assets/gaurav.jpg",
    rating: 5,
  },
  {
    text: "‘We got exactly what you needed—no fuss, no delay. Univens just works.’",
    name: "Priya",
    role: "Scale-up Founder",
    image: "https://via.placeholder.com/50",
    rating: 5,
  },
  {
    text: "‘Working with Univens was a game changer for our business. Their team truly understood our needs.’",
    name: "Emily",
    role: "Business Owner",
    image: "https://via.placeholder.com/50",
    rating: 5,
  },
  {
    text: "‘The level of professionalism and expertise at Univens exceeded our expectations. Highly recommend!’",
    name: "James",
    role: "CEO",
    image: "https://via.placeholder.com/50",
    rating: 5,
  },
  {
    text: "‘Univens helped us streamline our processes, and the results speak for themselves.’",
    name: "Michael",
    role: "Operations Manager",
    image: "https://via.placeholder.com/50",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Auto-switch every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const testimonial = testimonialRef.current;
    if (testimonial) {
      gsap.fromTo(
        testimonial,
        { opacity: 0, x: 50 }, // Slide in from the right
        { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
      );
    }
  }, [currentIndex]);

  return (
    <section id="testimonials" className="py-12 h-screen flex items-center  ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-500 mb-6">
          What Our Clients Are Saying
        </h2>
        <p className="text-gray-400 text-sm md:text-base mb-10">
          Discover the experiences and success stories of our clients working with Univens.
        </p>

        <div
          ref={testimonialRef}
          className="mt-10 mx-auto bg-gradient-to-b from-[#0a0a1a] to-[#1a1a2e] p-6 md:p-10 rounded-lg max-w-lg md:max-w-2xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:cursor-pointer"
        >
          <p className="text-lg md:text-xl italic mb-6 text-white">
            &ldquo;{testimonials[currentIndex].text}&rdquo;
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-12 h-12 rounded-full mb-4 md:mb-0 md:mr-4 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-12"
            />
            <div>
              <p className="font-bold text-white">{testimonials[currentIndex].name}</p>
              <p className="text-gray-400 text-sm">{testimonials[currentIndex].role}</p>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-lg">
                &#9733;
              </span>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="mt-8 flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-blue-500" : "bg-gray-500"} transition-colors duration-300`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
