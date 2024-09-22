"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../type/product";

interface ProductDetailPageProps {
  params: { title: string };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/product/${params.title}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [params.title]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.smallCardImage} alt={product.title} />
      <p>{product.name}</p>
      <p>Price: ${product.newPrice}</p>
      {/* Add more product details as needed */}
    </div>
  );
};

export default ProductDetailPage;
