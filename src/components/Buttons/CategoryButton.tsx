import type {FC} from "react"
import { Link } from "react-router-dom"

interface IProps {
    label: string,
    invertColor?: boolean
}

const CategoryButtons:FC<IProps> = ({label, invertColor}) => {
    return (
        <Link
        to={'categorias'}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 px-8 2xl:px-14 2xl:py-6 2xl:text-2xl py-2 text-base font-semibold 
            group-hover:bg-black transition-all duration-300 ease-in-out ${!invertColor ? 'bg-[#595558] text-white': 'bg-white text-[#595558]'}`}
      >
        {label}
      </Link>
    )
}

export default CategoryButtons;