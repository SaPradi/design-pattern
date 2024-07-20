import React, { useState } from 'react';
import { inventoryService } from '../services/inventory.service';

const RemoveProduct: React.FC = () => {
  const [id, setId] = useState<string>('');

  const handleRemoveProduct = () => {
    inventoryService.removeProduct(Number(id));
    setId('');
  };

  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="ID del ítem"
      />
      <button onClick={handleRemoveProduct}>Eliminar Ítem</button>
    </div>
  );
};

export default RemoveProduct;