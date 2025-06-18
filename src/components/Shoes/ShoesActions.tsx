import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addShoe, removeShoe, updateShoe, clearError } from '../../store/shoes';
import type { Shoe } from '../../interfaces/product.types';

const ShoesActions: React.FC = () => {
  const dispatch = useAppDispatch();
  const { shoes, error } = useAppSelector((state) => state.shoes);
  
  const [newShoe, setNewShoe] = useState<Omit<Shoe, 'referencia'>>({
    nombre: '',
    precio: 0,
    foto: ''
  });

  const handleAddShoe = () => {
    if (newShoe.nombre && newShoe.precio > 0 && newShoe.foto) {
      const shoeToAdd: Shoe = {
        ...newShoe,
        referencia: `G${Date.now()}` // Generate unique reference
      };
      dispatch(addShoe(shoeToAdd));
      setNewShoe({ nombre: '', precio: 0, foto: '' });
    }
  };

  const handleRemoveShoe = (referencia: string) => {
    dispatch(removeShoe(referencia));
  };

  const handleUpdateShoe = (referencia: string) => {
    const updatedShoe = {
      nombre: `${shoes.find(s => s.referencia === referencia)?.nombre} (Actualizado)`,
      precio: 6000
    };
    dispatch(updateShoe({ referencia, updatedShoe }));
  };

  const handleClearError = () => {
    dispatch(clearError());
  };

  return (
    <div className="p-6 bg-gray-50 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Acciones de Zapatos</h3>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          <p>{error}</p>
          <button 
            onClick={handleClearError}
            className="mt-2 px-3 py-1 bg-red-600 text-white rounded text-sm"
          >
            Limpiar Error
          </button>
        </div>
      )}

      {/* Add New Shoe Form */}
      <div className="mb-6 p-4 bg-white rounded border">
        <h4 className="font-semibold mb-3">Agregar Nuevo Zapato</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            type="text"
            placeholder="Nombre del zapato"
            value={newShoe.nombre}
            onChange={(e) => setNewShoe({ ...newShoe, nombre: e.target.value })}
            className="px-3 py-2 border rounded"
          />
          <input
            type="number"
            placeholder="Precio"
            value={newShoe.precio || ''}
            onChange={(e) => setNewShoe({ ...newShoe, precio: Number(e.target.value) })}
            className="px-3 py-2 border rounded"
          />
          <input
            type="text"
            placeholder="Nombre de la foto (ej: 21.jpg)"
            value={newShoe.foto}
            onChange={(e) => setNewShoe({ ...newShoe, foto: e.target.value })}
            className="px-3 py-2 border rounded"
          />
        </div>
        <button 
          onClick={handleAddShoe}
          className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Agregar Zapato
        </button>
      </div>

      {/* Shoes List with Actions */}
      <div className="space-y-3">
        <h4 className="font-semibold">Zapatos Disponibles ({shoes.length})</h4>
        {shoes.slice(0, 5).map((shoe) => (
          <div key={shoe.referencia} className="flex items-center justify-between p-3 bg-white rounded border">
            <div className="flex-1">
              <p className="font-medium">{shoe.nombre}</p>
              <p className="text-sm text-gray-600">
                Ref: {shoe.referencia} | Precio: ${shoe.precio.toLocaleString()}
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleUpdateShoe(shoe.referencia)}
                className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
              >
                Actualizar
              </button>
              <button
                onClick={() => handleRemoveShoe(shoe.referencia)}
                className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
        {shoes.length > 5 && (
          <p className="text-sm text-gray-500 text-center">
            Mostrando 5 de {shoes.length} zapatos
          </p>
        )}
      </div>
    </div>
  );
};

export default ShoesActions; 