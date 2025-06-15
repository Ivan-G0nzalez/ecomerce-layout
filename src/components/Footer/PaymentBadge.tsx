import React from 'react';
import type { PaymentMethod } from '~/interfaces/footer.types';

interface PaymentBadgeProps {
  method: PaymentMethod;
}

const PaymentBadge: React.FC<PaymentBadgeProps> = ({ method }) => {
  return (
    <div
      className={`${method.width || 'w-8'} h-5 ${
        method.bgColor
      } rounded flex items-center justify-center`}
    >
      <span className={`text-xs font-bold ${method.textColor}`}>
        {method.displayText}
      </span>
    </div>
  );
};

export default PaymentBadge;
