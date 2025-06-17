import React from 'react';
import type { FooterLink as FooterLinkType } from '~/interfaces/footer.types'; 

interface FooterLinkProps {
  link: FooterLinkType;
}

const FooterLink: React.FC<FooterLinkProps> = ({ link }) => {
  return (
    <li>
      <a 
        href={link.href} 
        className="text-base 2xl:text-xl text-gray-600 hover:text-gray-800 transition-colors"
      >
        {link.label}
      </a>
    </li>
  );
};

export default FooterLink;