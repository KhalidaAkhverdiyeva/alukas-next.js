export interface Product {
  id: number;
  title: string;
  name: string;
  smallCardImage: string;
  smallCardHoverImage: string;
  soldOut?: boolean;
  discountPercent?: number;
  isNewProduct?: boolean;
  newPrice: number;
  oldPrice?: number;
  }