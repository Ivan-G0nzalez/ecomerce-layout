import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadShoes, setSelectedShoe } from '../../store/shoes';
import type { Shoe } from '../../interfaces/product.types';

const ShoesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { shoes, loading, error, selectedShoe } = useAppSelector((state) => state.shoes);

  useEffect(() => {
    dispatch(loadShoes());
  }, [dispatch]);

  const handleShoeClick = (shoe: Shoe) => {
    dispatch(setSelectedShoe(shoe));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-lg">Cargando zapatos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="text-red-500 text-lg">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Catálogo de Zapatos</h2>
      
      {selectedShoe && (
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Zapato Seleccionado:</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p><strong>Nombre:</strong> {selectedShoe.nombre}</p>
              <p><strong>Precio:</strong> ${selectedShoe.precio.toLocaleString()}</p>
              <p><strong>Referencia:</strong> {selectedShoe.referencia}</p>
            </div>
            <div>
              <img 
                src={`/zapatillas/${selectedShoe.foto}`} 
                alt={selectedShoe.nombre}
                className="w-32 h-32 object-cover rounded"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder-shoe.jpg';
                }}
              />
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {shoes.map((shoe, index) => (
          <div 
            key={`${shoe.referencia}-${index}`}
            className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => handleShoeClick(shoe)}
          >
            <div className="aspect-square mb-4">
              <img 
                src={`/zapatillas/${shoe.foto}`} 
                alt={shoe.nombre}
                className="w-full h-full object-cover rounded"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder-shoe.jpg';
                }}
              />
            </div>
            <h3 className="font-semibold text-lg mb-2">{shoe.nombre}</h3>
            <p className="text-gray-600 mb-2">Ref: {shoe.referencia}</p>
            <p className="text-xl font-bold text-blue-600">
              ${shoe.precio.toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {shoes.length === 0 && !loading && !error && (
        <div className="text-center text-gray-500 py-8">
          No se encontraron zapatos
        </div>
      )}
    </div>
  );
};

export default ShoesList; 