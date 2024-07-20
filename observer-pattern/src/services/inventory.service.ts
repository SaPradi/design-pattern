import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';



class InventoryService {
  private stock: BehaviorSubject<Product[]>;

  constructor() {
    this.stock = new BehaviorSubject<Product[]>([]);
  }

  public getStock() {
    return this.stock.asObservable();
  }

  public addProduct(Product: Product) {
    const currentStock = this.stock.getValue();
    this.stock.next([...currentStock, Product]);
  }

  public removeProduct(ProductId: number) {
    const currentStock = this.stock.getValue();
    this.stock.next(currentStock.filter(Product => Product.id !== ProductId));
  }
}

export const inventoryService = new InventoryService();