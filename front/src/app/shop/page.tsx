/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import CircleCard from "@/components/circlecard";
import ProductCard from "@/components/productCard";
import SkeletonLoader from "@/components/shopPageSkeleton";
import { Product } from "@/type/product";
import { BreadCrumb } from "primereact/breadcrumb";
import React, { useEffect, useState } from "react";
import { BsGrid3X3Gap } from "react-icons/bs";
import { CiBoxList, CiGrid41 } from "react-icons/ci";
import { IoChevronDownOutline, IoCloseOutline } from "react-icons/io5";
import { RiFilterLine } from "react-icons/ri";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import Sidebar from "../../components/filterSideBar";

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cardsPerRow, setCardsPerRow] = useState<number>(3);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalProducts, setTotalProducts] = useState<number>(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(true);
  const productsPerPage = 15;

  const [price, setPrice] = useState<[number, number]>([0, 1500]);
  const [collectionName, setCollectionName] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [material, setMaterial] = useState<string>("");
  const [availability, setAvailability] = useState<string>("");
  const [isNewProduct, setIsNewProduct] = useState<boolean>(false);

  const [activeFilters, setActiveFilters] = useState<{
    [key: string]: string | boolean;
  }>({});

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

  const fetchProducts = async (page: number) => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({
        page: String(page),
        limit: String(productsPerPage),
        collectionName: collectionName || "",
        color: color || "",
        size: size || "",
        material: material || "",
        availability: availability || "",
        minPrice: String(price[0]),
        maxPrice: String(price[1]),
      }).toString();

      const response = await fetch(
        `http://localhost:3000/api/product/all?${queryParams}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Fetching products with:", {
        minPrice: price[0],
        maxPrice: price[1],
      });
      setProducts(data.products);
      setTotalProducts(data.totalCount);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts(currentPage);
  }, [
    currentPage,
    collectionName,
    color,
    size,
    material,
    availability,
    isNewProduct,
  ]);

  if (loading)
    return (
      <div>
        <SkeletonLoader />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  const handleFilterChange = (filterType: string, value: string) => {
    switch (filterType) {
      case "collectionName":
        setCollectionName(value);
        setActiveFilters((prev) => ({ ...prev, collectionName: value }));
        break;
      case "color":
        setColor(value);
        setActiveFilters((prev) => ({ ...prev, color: value }));
        break;
      case "size":
        setSize(value);
        setActiveFilters((prev) => ({ ...prev, size: value }));
        break;
      case "material":
        setMaterial(value);
        setActiveFilters((prev) => ({ ...prev, material: value }));
        break;
      case "availability":
        setAvailability(value);
        setActiveFilters((prev) => ({ ...prev, availability: value }));
        break;
      case "isNewProduct":
        setIsNewProduct(value === "true");
        setActiveFilters((prev) => ({
          ...prev,
          isNewProduct: value === "true",
        }));
        break;
      default:
        break;
    }
    setCurrentPage(1);
  };

  const removeFilter = (filterType: string) => {
    setActiveFilters((prev) => {
      const newFilters = { ...prev };
      delete newFilters[filterType];
      return newFilters;
    });

    switch (filterType) {
      case "collectionName":
        setCollectionName("");
        break;
      case "color":
        setColor("");
        break;
      case "size":
        setSize("");
        break;
      case "material":
        setMaterial("");
        break;
      case "availability":
        setAvailability("");
        break;
      case "isNewProduct":
        setIsNewProduct(false);
        break;
      default:
        break;
    }
    setCurrentPage(1);
  };

  const handlePriceChange = (values: [number, number]) => {
    setPrice(values);
    // Fetch products based on the new price range
    fetchProducts(currentPage); // Pass the current page instead
    // Reset to the first page if you're paginating
    setCurrentPage(1); // Uncomment this line if you want to reset to the first page
  };
  const handleCardsPerRowChange = (count: number) => {
    setCardsPerRow(count);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const toggleFilterSidebar = () => {
    setIsFilterOpen((prev) => !prev);
    setIsSidebarOpen((prev) => !prev);
  };

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const breadcrumbModel = [{ label: "Home", url: "/" }, { label: "Shops" }];

  return (
    <div>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onFilterChange={handleFilterChange}
        price={price}
        onPriceChange={handlePriceChange}
      />
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
                <div
                  onClick={toggleFilterSidebar}
                  className="text-white cursor-pointer bg-black flex items-center text-[12px] font-[500] gap-[5px] py-[7px] px-[18px]"
                >
                  <RiFilterLine className="text-[20px]" />
                  FILTER
                </div>
                <div className="text-[18px] text-[#555]">
                  There are <span>{totalProducts}</span> results in total
                </div>
              </div>
              <div className="flex items-center gap-[20px] text-[18px]">
                <div>Sort by:</div>
                <div className="flex items-center gap-[10px]">
                  Alphabetically: A-Z <IoChevronDownOutline />
                </div>
                <div className="flex gap-[10px] items-center">
                  <div
                    className="cursor-pointer"
                    onClick={() => handleCardsPerRowChange(2)}
                  >
                    <CiGrid41 />
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => handleCardsPerRowChange(3)}
                  >
                    <BsGrid3X3Gap />
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => handleCardsPerRowChange(4)}
                  >
                    <TfiLayoutGrid4 />
                  </div>
                  {/* <div>
                    <CiBoxList className="text-[22px]" />
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2  pb-[20px] items-start self-start">
            {Object.entries(activeFilters).map(([key, value]) => (
              <div
                key={key}
                className="bg-[#F5F5F5] py-2 px-[14px] rounded flex items-center"
              >
                <span className="mr-[5px] text-[14px]">{String(value)}</span>
                <button
                  onClick={() => removeFilter(key)}
                  className="text-gray-700"
                >
                  <IoCloseOutline className="text-[20px]" />
                </button>
              </div>
            ))}
          </div>

          <div className={`grid ${getGridClasses()} gap-[20px] w-full`}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center py-[50px]">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-2 px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "border border-black text-black"
                    : " text-black"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
