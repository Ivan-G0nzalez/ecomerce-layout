interface CheckboxFilterProps {
  items: string[];
}

const CheckboxFilter: React.FC<CheckboxFilterProps> = ({
  items,
}) => (
  <div className='space-y-2'>
    {items.map((item) => (
      <label key={item} className='flex items-center space-x-2 cursor-pointer'>
        
        <span className='text-base 2xl:text-xl text-gray-700'>{item}</span>
      </label>
    ))}
  </div>
);

export default CheckboxFilter;
