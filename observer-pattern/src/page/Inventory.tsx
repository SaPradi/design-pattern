import  { useEffect, useState } from 'react';
import { inventoryService } from '../services/inventory.service';
import { Product } from '../models/product';



const Inventory: React.FC = () => {
    const [stock, setStock] = useState<Product[]>([]);

    const handleRemoveProduct = (id:number) => {
        inventoryService.removeProduct(id);
    };
    useEffect(() => {
        const subscription = inventoryService.getStock().subscribe(setStock);
        return () => subscription.unsubscribe();
    }, []);

    return (
        <div className='flex justify-center items-center flex-col bg-red'>
            <h1 className=' text-white text-2xl'>Inventario</h1>
            <div className='flex flex-col gap-4'>
                {
                stock.map((item) => (
                    <div onDoubleClick={()=> handleRemoveProduct(item.id)} 
                        className='text-white shadow-md border-blue-500 border-solid border-[1px] p-2 rounded-md cursor-pointer' key={item.id}>
                        <small className=' text-gray-500'> {item.id} </small>
                        <p className=' '>Nombre: {item.name} </p>
                        <strong>Precio: { item.value} $</strong>
                        {/* <hr /> */}
                    </div>
                ))
                }
            </div>
        </div>
    );
};

export default Inventory;