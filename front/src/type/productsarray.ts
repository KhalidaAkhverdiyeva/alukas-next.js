import { Product } from "./product";

 export interface Products {
    products: Product[];
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
    hovered: boolean; 
  }