"use client";
import CircleCard from "@/components/circlecard";
import ProductCard from "@/components/productCard";
import { Product } from "@/type/product";
import { BreadCrumb } from "primereact/breadcrumb";
import React, { useEffect, useState } from "react";
import { BsGrid3X3Gap } from "react-icons/bs";
import { CiBoxList, CiGrid41 } from "react-icons/ci";
import { IoChevronDownOutline } from "react-icons/io5";
import { RiFilterLine } from "react-icons/ri";
import { TfiLayoutGrid4 } from "react-icons/tfi";

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cardsPerRow, setCardsPerRow] = useState<number>(3);

  const getGridClasses = () => {
    switch (cardsPerRow) {
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-3";
      case 4:
        return "grid-cols-4";
      default:
        return "grid-cols-3";
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/product/all");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        if (data.products) {
          setProducts(data.products);
        } else {
          throw new Error("No products found");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  const handleCardsPerRowChange = (count: number) => {
    setCardsPerRow(count);
  };
  const breadcrumbModel = [{ label: "Home", url: "/" }, { label: "Shops" }];
  return (
    <div>
      <div className="relative">
        <img
          src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_bg_collections.jpg?v=1711247313"
          alt=""
          className="relative"
        />
        <div className="absolute top-[80px] left-[700px]">
          <div className="text-[45px] ">Shops</div>
          <BreadCrumb model={breadcrumbModel} />
        </div>
      </div>
      <div className="flex justify-center py-[80px]">
        <div className="w-[1360px] flex flex-col items-center">
          <div className="flex justify-between w-full">
            <CircleCard
              imageUrl="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t1.jpg?v=1710145653&width=165"
              description="necklaces"
            />
            <CircleCard
              imageUrl="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t2.jpg?v=1710145652&width=165"
              description="rings"
            />
            <CircleCard
              imageUrl="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t3.jpg?v=1710145652&width=165"
              description="bracelets"
            />
            <CircleCard
              imageUrl="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t4.jpg?v=1710145653&width=165"
              description="earnings"
            />
            <CircleCard
              imageUrl="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t5.jpg?v=1710145653&width=165"
              description="charm & dangles"
            />
            <CircleCard
              imageUrl="https://demo-alukas.myshopify.com/cdn/shop/files/alk1_t6.jpg?v=1710145653&width=165"
              description="gift ideas"
            />
          </div>
          <div className="flex justify-between w-full ">
            <div className="py-[50px] flex justify-between w-full">
              <div className="flex gap-[20px] items-center">
                <div className="text-white bg-black flex items-center text-[12px] font-[500] gap-[5px] py-[7px] px-[18px]">
                  <RiFilterLine className="text-[20px]" />
                  FILTER
                </div>
                <div className="text-[18px] text-[#555]">
                  There are <span>{49}</span> results in total
                </div>
              </div>
              <div className="flex items-center gap-[20px] text-[18px]">
                <div>Sort by:</div>
                <div className="flex items-center gap-[10px]">
                  Alphabetically: A-Z <IoChevronDownOutline />
                </div>
                <div className="flex gap-[10px] items-center">
                  <div onClick={() => handleCardsPerRowChange(2)}>
                    <CiGrid41 />
                  </div>
                  <div onClick={() => handleCardsPerRowChange(3)}>
                    <BsGrid3X3Gap />
                  </div>
                  <div onClick={() => handleCardsPerRowChange(4)}>
                    <TfiLayoutGrid4 />
                  </div>
                  <div>
                    <CiBoxList className="text-[22px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`grid ${getGridClasses()} gap-4 w-full`}>
            {products.map((product) => (
              <ProductCard key={product.id} products={products} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
