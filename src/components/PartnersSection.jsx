
const PartnersSection = () => {
  return (
    <div className="flex justify-center items-center relative bottom-[-15%] py-10 px-10 w-fit mx-auto">
    {['Nickelodeon_2023_logo.svg', 'disney.svg', 'pocket-fm-seeklogo.svg', 'kuku-fm-svgrepo-com.svg', 'bigfm.png'].map((partner, index) => (
      <img
        key={index}
        src={`/logo/${partner}`}
        alt={partner}
        className="flex h-10 mx-5 md:h-12 opacity-80 hover:opacity-100"
        style={(index!==4)?{
          width:"15%",
          aspectRatio:3/2,
          objectFit:"contain",
          filter:"invert(1)"
        }:{
          width:"15%",
          aspectRatio:3/2,
          objectFit:"contain"
        }}
      />
    ))}
  </div>
  )
}

export default PartnersSection
