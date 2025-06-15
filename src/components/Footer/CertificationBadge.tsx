import React from 'react';

interface CertificationBadgeProps {
  label?: string;
  imageSrc: string;
  alt: string;
  width?: string;
  height?: string;
}

const CertificationBadge: React.FC<CertificationBadgeProps> = ({ 
    label,
    imageSrc,
    alt,
    width = 'w-auto',
    height = 'h-6'
  }) => {
    return (
      <div className="flex flex-col items-center space-y-1">
        {label && (
          <span className="text-xs text-gray-500 text-center">{label}</span>
        )}
        <img 
          src={imageSrc} 
          alt={alt}
          className={`${width} ${height} object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity`}
        />
      </div>
    );
  };
  
export default CertificationBadge;


