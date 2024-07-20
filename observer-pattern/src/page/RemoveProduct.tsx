import React, { useState } from 'react';
import { inventoryService } from '../services/inventory.service';

const RemoveProduct: React.FC = () => {
  const [id, setId] = useState<string>('');



  return (
    <div className='flex flex-col gap-2 bg-slate-900  p-6 rounded-sm shadow-sm'>
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