interface SizeFilterProps {
  sizes: string[];
  selectedSizes: string[];
  onSizeToggle: (size: string) => void;
}

const SizeFilter: React.FC<SizeFilterProps> = ({
  sizes,
  selectedSizes,
  onSizeToggle,
}) => (
  <div className='grid grid-cols-5 gap-2'>
    {sizes.map((size) => (
      <button
        key={size}
        onClick={() => onSizeToggle(size)}
        className={`w-10 h-10 border text-sm font-bold rounded  ${
          selectedSizes.includes(size)
            ? 'bg-gray-900 text-white border-gray-900'
            : 'bg-[#C8C6CA] text-gray-700 border-gray-300 hover:border-gray-400'
        }`}
      >
        {size}
      </button>
    ))}
  </div>
);

export default SizeFilter;
