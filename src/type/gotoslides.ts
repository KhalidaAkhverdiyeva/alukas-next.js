import { Product } from "./product";

export interface GotToSlideProps {
    products: Product[];
    currentIndex: number;
    setCurrentIndex: (index: number) => void;
  }