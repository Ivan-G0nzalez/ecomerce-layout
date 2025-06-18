import React from 'react';
import ShoesList from './ShoesList';
import ShoesActions from './ShoesActions';

const ShoesManager: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Gestor de Zapatos con Redux Toolkit
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Actions Panel */}
        <div className="lg:col-span-1">
          <ShoesActions />
        </div>
        
        {/* Shoes List */}
        <div className="lg:col-span-2">
          <ShoesList />
        </div>
      </div>
    </div>
  );
};

export default ShoesManager; 