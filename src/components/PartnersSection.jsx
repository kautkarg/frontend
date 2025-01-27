<<<<<<< HEAD
const PartnersSection = () => {
  return (
    <div className="relative py-10 px-4">
      <h2 className="text-center text-xl font-semibold text-gray-500 opacity-70 mb-6">
        Our Experts Have Worked With
      </h2>
      <div className="flex flex-wrap justify-center items-center overflow-hidden">
        <div className="flex animate-marquee space-x-8">
          {[
            'https://euhfmfenonopvmoowvbb.supabase.co/storage/v1/object/public/product-images/uploads/company%20logos/nickl.png',
            'https://euhfmfenonopvmoowvbb.supabase.co/storage/v1/object/public/product-images/uploads/company%20logos/disney.png',
            'https://euhfmfenonopvmoowvbb.supabase.co/storage/v1/object/public/product-images/uploads/company%20logos/pocket-fm-seeklogo%201.png',
            'https://euhfmfenonopvmoowvbb.supabase.co/storage/v1/object/public/product-images/uploads/company%20logos/kukufm.png',
            'https://euhfmfenonopvmoowvbb.supabase.co/storage/v1/object/public/product-images/uploads/company%20logos/bigfm.png',
            'https://euhfmfenonopvmoowvbb.supabase.co/storage/v1/object/public/product-images/uploads/company%20logos/nickl.png',
            'https://euhfmfenonopvmoowvbb.supabase.co/storage/v1/object/public/product-images/uploads/company%20logos/disney.png',
            'https://euhfmfenonopvmoowvbb.supabase.co/storage/v1/object/public/product-images/uploads/company%20logos/pocket-fm-seeklogo%201.png',
            'https://euhfmfenonopvmoowvbb.supabase.co/storage/v1/object/public/product-images/uploads/company%20logos/kukufm.png',
            'https://euhfmfenonopvmoowvbb.supabase.co/storage/v1/object/public/product-images/uploads/company%20logos/bigfm.png'
          ].map((logo, index) => (
            <img
              key={index}
              src={logo} // Directly use the Supabase URL
              alt="Partner Logo"
              className="m-4 h-4 opacity-80 hover:opacity-100" // Updated to h-8 for smaller size
            />
          ))}
        </div>
      </div>
    </div>
  );
};

=======
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const PartnersSection = () => {
  const containerRef = useRef(null);
  const logoRefs = useRef([]);
  const logos = [
    "Nickelodeon_2023_logo.svg",
    "disney.svg",
    "pocket-fm-seeklogo.svg",
    "kuku-fm-svgrepo-com.svg",
    "bigfm.png",
  ];

  const handleRef = (ref) => {
    if (ref && !logoRefs.current.includes(ref)) {
      logoRefs.current.push(ref);
    }
  };

  useGSAP(() => {
    if (logoRefs.current.length && containerRef.current) {
      const totalWidth = logoRefs.current.reduce(
        (acc, logo) => acc + logo.offsetWidth + 2, 
        0
      );

      const wrapper = containerRef.current;
      wrapper.style.width = `${totalWidth * 2}px`;

      return gsap.to(wrapper, {
        x: -totalWidth,
        duration: 10, 
        ease: "linear",
        repeat: -1, 
      });
    }
  }, [logos]);

  return (
    <div className="relative w-1/2 overflow-hidden py-10 mx-auto">
      <div
        ref={containerRef}
        className="flex justify-center items-center whitespace-nowrap"
      >
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            ref={handleRef}
            src={`/logo/${logo}`}
            alt={logo}
            className="h-10 mx-5 md:h-12 opacity-80 hover:opacity-100 cursor-pointer"
            style={{
              width: "10%",
              aspectRatio: "3 / 2",
              objectFit: "contain",
              ...(index % 5 !== 4 && { filter: "invert(1)" }),
            }}
          />
        ))}
      </div>
    </div>
  );
};

>>>>>>> a0514e63f6cd3b2709c3cd3ac1f445419a4ba00c
export default PartnersSection;
