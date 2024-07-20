// Inventory.tsx
import React, { useEffect, useState } from 'react';
import { inventoryService } from '../services/inventory.service';

interface Item {
    id: number;
    name: string;
}

const Inventory: React.FC = () => {
    const [stock, setStock] = useState<Item[]>([]);

    useEffect(() => {
        const subscription = inventoryService.getStock().subscribe(setStock);
        return () => subscription.unsubscribe();
    }, []);

    return (
        <div>
            <h1>Inventario</h1>
            <ul>
                {stock.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Inventory;