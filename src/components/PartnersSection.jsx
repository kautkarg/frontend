const PartnersSection = () => {
  return (
    <div className="relative py-10 px-4">
      <h2 className="text-center text-xl font-semibold text-gray-500 opacity-70 mb-6">
        Our Experts Have Worked With
      </h2>
      <div className="flex flex-wrap justify-center items-center overflow-hidden">
        <div className="flex animate-marquee space-x-8">
          {['', 'disney.png', 'pocketfm.png', 'kukufm.png', 'bigfm.png', 'nickelodeon.png', 'disney.png', 'pocketfm.png', 'kukufm.png', 'bigfm.png'].map((logo, index) => (
            <img
              key={index}
              src={`./assets/logos/${logo}`} // Assuming logos are placed in the 'assets/logos' folder
              alt="Partner Logo"
              className="m-4 h-12 opacity-80 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
