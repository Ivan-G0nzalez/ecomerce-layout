import React from 'react';
import CertificationBadge from './CertificationBadge';

const PaymentSection: React.FC = () => {
  return (
    <div className='pt-4'>
      <div className='flex flex-wrap justify-center items-center gap-8 opacity-60'>
        <CertificationBadge
          label='Desarrollado por'
          imageSrc='/riseGrey.png'
          alt='Rise Logo'
          width='w-20'
        />

        <CertificationBadge
          label='Tecnología'
          imageSrc='/vtexLogoG.png'
          alt='VTEX Logo'
          width='w-20'
        />

        <CertificationBadge
          label='Certificado por'
          imageSrc='/pcidss logo.png'
          alt='PCI DSS Logo'
          width='w-16'
        />

        <CertificationBadge
          imageSrc='/logo digicert.png'
          alt='DigiCert Logo'
          height='h-8'
          width='w-20'
        />

        <div className='flex items-center'>
          <div className='flex flex-col items-start space-y-1'>
            <span
              className='text-xs text-gray-500 ml-4'
            >
              Métodos de pago
            </span>
            <img
              src='/metodosDePago.png'
              alt='Métodos de pago'
              className='h-12 object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
