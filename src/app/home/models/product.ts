import { Supplier } from "./supplier";

export interface Product {
  get_id: string;
  productName: string;
  stock: number;
  unitPrice: number;
  categories: string[];
  discontinued: boolean;
  imageUrl: string;
  supplier: Supplier
}
