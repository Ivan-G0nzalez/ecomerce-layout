import type {FC} from "react";
import CategoryCard from "./CategoryCard";

const CategoriesGrid: FC = () => {
    return (
      <section className="flex justify-center sm:h-96 lg:h-136 min-h-0 p-10">
        {/* Fila 1: Hombre y Mujer */}

        <div className="grid grid-cols-2 max-w-5xl gap-8 items-stretch h-full">
            <CategoryCard image="/categoria-hombre.png" label="HOMBRE" />
            <CategoryCard image="/categoria-mujeres.png" label="MUJER" />
          </div>
  
  
      
      </section>
    );
  };
  
  export default CategoriesGrid;