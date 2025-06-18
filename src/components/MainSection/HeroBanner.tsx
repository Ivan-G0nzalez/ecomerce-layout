import type {FC} from "react"
import { Link } from "react-router-dom";

const HeroBannerMove: FC = () => {
    return (
      <section className="relative bg-light-rose h-108 md:h-[32rem]  lg:h-[28rem] 2xl:h-[65vh] w-full overflow-hidden">
        {/* Imagen central */}
        <img
          src="/Hero image.png"
          alt="Hero model"
          className="absolute left-2/12 bottom-0 h-full md:h-[120%] lg:h-[100%] object-contain z-10"
        />
  
        {/* Letras MOVE */}
        {/* <div className="absolute left-8 top-12 text-[80px] font-bold leading-none text-orange-500 z-20">
          <div>M</div>
          <div className="-ml-3 text-black">O</div>
          <div className="text-orange-500">V</div>
          <div className="text-[#E58E3A]">E</div>
        </div> */}
  
        {/* Zapatilla derecha */}
        {/* <img
          src="/assets/images/shoe-top-right.png"
          alt="Floating shoe"
          className="absolute right-8 top-0 h-[120px] rotate-[-90deg] z-10"
        /> */}
  
        {/* Branding vertical */}
        <div className="absolute right-16 lg:right-62 top-32 font-bold text-2xl  text-orange-500 tracking-wider rotate-[-90deg] 2xl:bottom-34 2xl:text-3xl 2xl:right-27">
          Hush Puppies ®
        </div>
  
        {/* Botón */}
        <div className="absolute 2xl:bottom-18 bottom-13 right-82 z-20 lg:right-103 2xl:right-119">
          <Link to='categorias' className="text-[#b5a59e] px-8 py-3 bg-white hover:bg-gray-100 transition text-base font-semibold 2xl:w-55 shadow-[0px_4px_10px_6px_rgba(0,0,0,0.15)]">
            SHOP NOW
          </Link>
        </div>
      </section>
    );
  };
  
  export default HeroBannerMove;