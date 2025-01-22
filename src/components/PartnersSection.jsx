
const PartnersSection = () => {
  return (
    <div className="flex flex-wrap justify-center items-center relative bottom-[-15%] py-10 px-4">
    {['Nickelodeon', 'Disney', 'Pocket FM', 'Kuku FM', 'BIG FM'].map((partner, index) => (
      <img
        key={index}
        src={`https://via.placeholder.com/100x50?text=${partner}`}
        alt={partner}
        className="m-4 h-10 md:h-12 opacity-80 hover:opacity-100"
      />
    ))}
  </div>
  )
}

export default PartnersSection
