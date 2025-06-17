import type {FC} from "react"

interface IProps {
    label: string,
    root?: string
    invertColor?: boolean
}

const CategoryButtons:FC<IProps> = ({label, root, invertColor}) => {
    return (
        <a
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 px-8 2xl:px-14 2xl:py-6 2xl:text-2xl py-2 text-base font-semibold 
            group-hover:bg-black transition-all duration-300 ease-in-out ${!invertColor ? 'bg-[#595558] text-white': 'bg-white text-[#595558]'}`}
      >
        {label}
      </a>
    )
}

export default CategoryButtons;