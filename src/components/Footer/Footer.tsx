import React from 'react';
import SocialHeader from '../SocialHeader/SocialHeader';
import FooterSection from './FooterSection';
import Newsletter from './NewsLetter';
import PaymentSection from './PaymentSection';
import type { FooterSection as FooterSectionType } from '~/interfaces/footer.types';

const Footer: React.FC = () => {
  const footerSections: FooterSectionType[] = [
    {
      title: 'SERVICIO AL CLIENTE',
      links: [
        { label: 'CONTÁCTENOS', href: '/contacto' },
        { label: 'CAMBIOS Y DEVOLUCIONES', href: '/cambios-devoluciones' },
        { label: 'POLÍTICAS DE LA TIENDA', href: '/politicas-tienda' },
        { label: 'POLÍTICAS DE DATOS', href: '/politicas-datos' },
      ],
    },
    {
      title: 'MI CUENTA',
      links: [
        { label: 'MIS PEDIDOS', href: '/mis-pedidos' },
        { label: 'MIS DEVOLUCIONES', href: '/mis-devoluciones' },
      ],
    },
    {
      title: 'RECURSOS',
      links: [
        { label: 'TIENDAS', href: '/tiendas' },
        { label: 'DEVOLUCIONES', href: '/devoluciones' },
      ],
    },
  ];

  const handleNewsletterSubmit = (email: string) => {
    console.log('Email submitted:', email);
    // Aquí iría la lógica para suscribir al newsletter
  };

  return (
    <footer className='py-12'>
      <SocialHeader />
      <div className='2xl:mx-34 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          {footerSections.map((section, index) => (
            <FooterSection key={index} section={section} />
          ))}
          <Newsletter onSubmit={handleNewsletterSubmit} />
        </div>
      </div>
      <div className='border-t border-gray-200'/>
        <PaymentSection />
    </footer>
  );
};

export default Footer;
