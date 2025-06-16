const VideosSection = () => {
    return (
        <section className="relative bg-light-rose h-100  lg:h-[20rem] w-full overflow-hidden">
        {/* Imagen central */}
        <img
          src="/DiscoSection-WithOut-BackGround.png"
          alt="Hero model"
          className="absolute top-3/5 -translate-y-1/2 left-2/12 bottom-0 md:h-[120%] lg:h-[180%] object-contain z-10"
        />
        <div className="absolute right-16 lg:right-62 top-32 font-bold text-2xl text-orange-500 tracking-wider rotate-[-90deg]">
          Hush Puppies ®
        </div>
  
        {/* Botón */}
        <div className="absolute bottom-8 right-82 z-20 lg:right-135">
          <button className="text-[#b5a59e] px-8 py-1 bg-white hover:bg-gray-100 transition text-base font-semibold shadow-[0px_4px_10px_6px_rgba(0,0,0,0.15)]">
            SHOP NOW
          </button>
        </div>
      </section>
    )
}

export default VideosSection;