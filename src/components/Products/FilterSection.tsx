interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, children }) => (
  <div className='mb-8'>
    <h3 className='font-bold text-gray-900 mb-4 text-base 2xl:text-lg'>{title}</h3>
    {children}
  </div>
);

export default FilterSection;
