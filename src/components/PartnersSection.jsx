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

export default PartnersSection;
