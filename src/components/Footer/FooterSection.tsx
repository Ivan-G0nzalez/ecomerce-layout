import React from 'react';
import FooterLink from './FooterLink';
import type { FooterSection as FooterSectionType } from '~/interfaces/footer.types'; 

interface FooterSectionProps {
  section: FooterSectionType;
}

const FooterSection: React.FC<FooterSectionProps> = ({ section }) => {
  return (
    <div>
      <h3 className="text-sm font-libre font-semibold text-gray-800 uppercase tracking-wide mb-4">
        {section.title}
      </h3>
      <ul className="space-y-2">
        {section.links.map((link, index) => (
          <FooterLink key={index} link={link} />
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;