const MapComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center p-5 mb-8">
      <h1 className="font-bigB text-2xl md:text-3xl text-navy text-center mb-4">
        Come find us in Nairobi CBD
      </h1>
      <div className="w-full max-w-5xl h-96 md:h-[500px] border border-gray-100 rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps?q=Nairobi+CBD+Kenya&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default MapComponent