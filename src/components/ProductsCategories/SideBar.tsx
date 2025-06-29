import CheckboxFilter from "./CheckboxFilter";
import FilterSection from "./FilterSection";
import PriceFilter from "./PriceFilter";
import SizeFilter from "./SizeFilter";

const Sidebar: React.FC<{
    sizes: string[];
    selectedSizes: string[];
    materials: string[];
    colors: string[];
    technologies: string[];
    onSizeToggle: (size: string) => void;
    
  }> = ({
    sizes,
    selectedSizes,
    materials,
    colors,
    technologies,
    onSizeToggle,
  }) => (
    <div className="w-full sm:w-80 lg:w-80 xl:w-76 2xl:w-100 flex-shrink-0">
      <div className="bg-white p-4 sm:p-6 border border-gray-300  shadow-sm lg:h-[820px] xl:h-[820px] 2xl:h-235 overflow-y-auto">
        <FilterSection title="TALLA">
          <SizeFilter 
            sizes={sizes} 
            selectedSizes={selectedSizes} 
            onSizeToggle={onSizeToggle} 
          />
        </FilterSection>
  
        <FilterSection title="PRECIO">
          <PriceFilter />
        </FilterSection>
  
        <FilterSection title="MATERIAL">
          <CheckboxFilter 
            items={materials} 
          />
        </FilterSection>
  
        <FilterSection title="COLOR">
          <CheckboxFilter 
            items={colors} 
          />
        </FilterSection>
  
        <FilterSection title="TECNOLOGÍA">
          <CheckboxFilter 
            items={technologies} 
          />
        </FilterSection>
      </div>
    </div>
  );

export default Sidebar;