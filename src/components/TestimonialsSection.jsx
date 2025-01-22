import React from 'react'

const TestimonialsSection = () => {
  return (
      <section id='testimonials' className="py-3 h-screen text-center flex items-center">
        <div className='mx-auto'>
        <h2 className="text-2xl md:text-3xl font-bold">What Our Clients Are Saying</h2>
        <p className="mt-4 text-gray-400 text-sm md:text-base">Discover what our clients say about their experiences and success working with us.</p>
        <div className="mt-10 mx-auto bg-gradient-to-b from-[#0a0a1a] to-[#1a1a2e] p-6 md:p-10 rounded-lg max-w-lg md:max-w-2xl">
          <p className="text-lg md:text-xl italic mb-6 text-white">&ldquo;Univens connected us with the right marketing experts at the perfect time. They made our growth seamless.&rdquo;</p>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <img
              src="https://via.placeholder.com/50"
              alt="Raj"
              className="w-12 h-12 rounded-full mb-4 md:mb-0 md:mr-4"
            />
            <div>
              <p className="font-bold text-white">Raj</p>
              <p className="text-gray-400 text-sm">Startup Founder</p>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-500 text-lg">&#9733;</span>
            ))}
          </div>
        </div>
      </div>
     </section>
  );
}

export default TestimonialsSection;
