import React, { useState } from 'react';
import { inventoryService } from '../services/inventory.service';

const AddProduct: React.FC = () => {
  const [name, setName] = useState<string>('');

  const handleAddProduct = () => {
    const newProduct = { id: Date.now(), name };
    inventoryService.addProduct(newProduct);
    setName('');
  };

  return (
    <div className='flex flex-col bg-red-400  p-6 rounded-sm'>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre del ítem"
      />
      <button onClick={handleAddProduct}>Añadir Ítem</button>
    </div>
  );
};

export default AddProduct;