import React, { useState } from 'react';
import { inventoryService } from '../services/inventory.service';

const AddProduct: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [value,setValue] = useState<string>('');



  const handleAddProduct = () => {
    const newProduct = { id: Date.now(), name,value };
    inventoryService.addProduct(newProduct);
    setName('');
    setValue('');
  };




  return (
    <div className='flex flex-col gap-2 bg-slate-900  p-6 rounded-sm shadow-sm'>
      <h2 className='text-center text-white '>New Product</h2>
      <input
        className=' p-1'
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre"
      />
      <input
        className=' p-1'
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Precio"
      />
      <button className=' bg-blue-600 text-white' onClick={handleAddProduct}>Añadir Ítem</button>
    </div>
  );
};

export default AddProduct;