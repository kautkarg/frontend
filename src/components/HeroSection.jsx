import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

const HeroSection = () => {

  return (
    <div className="text-center py-5 px-10 flex-grow flex flex-col mt-36 items-center">
    <h1 className='relative h-10 w-[80vh] text-4xl font-bold text-gray-800'>
    <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Welcome to ')
                .typeString('<strong>Univens</strong>')
                .pauseFor(1000)  
                .deleteChars(7) 
                .typeString('Univens')  
                .pauseFor(1000)
                .start();
            }}
            options={{ 
              cursor:'',
              delay: 100, 
            }}
          />
    </h1>
    <h2 className="text-2xl md:text-4xl leading-relaxed">
      Focus on what matters, grow your business with <br className="hidden md:block" /> trusted solutions from reliable experts.
    </h2>
    <p className="mt-4 text-gray-400 text-base md:text-lg">Business simplified</p>

    <div className="mt-10 flex flex-col md:flex-row justify-center items-center">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-full md:w-80 px-4 py-2 border border-gray-600 bg-black rounded-l text-white focus:outline-none mb-4 md:mb-0"
      />
      <button className="bg-blue-500 text-white py-2 px-6 rounded md:rounded-r hover:bg-blue-600">Get Started</button>
    </div>
  </div>
  );
}

export default HeroSection
