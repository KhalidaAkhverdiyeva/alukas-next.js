/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@/Context/userContext";
import axios from "axios";
import ProductCard from "@/components/productCard";
import { Product } from "@/type/product";
import { HiOutlineXMark } from "react-icons/hi2";

interface WishlistItem {
  _id: string;
  productId: string;
}

const WishlistPage = () => {
  const { userId } = useUser();
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/wishlist/wishlist/${userId}`
        );
        const wishlistData = response.data;

        const productIds = wishlistData.map(
          (item: WishlistItem) => item.productId
        );

        if (productIds.length > 0) {
          const productResponse = await axios.post(
            "http://localhost:3000/api/product/getProductsByIds",
            {
              productIds,
            }
          );
          setProducts(productResponse.data.products);
        }

        setWishlistItems(wishlistData);
      } catch (error) {
        console.error("Error fetching wishlist data", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchWishlist();
    }
  }, [userId]);

  const handleRemove = async (wishlistItemId: string, productId: string) => {
    console.log("Removing item with ID:", wishlistItemId);
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/wishlist/wishlist/${wishlistItemId}`
      );
      console.log("Delete Response:", response.data);
      setProducts((prevProducts) =>
        prevProducts.filter((p) => p._id !== productId)
      );
      setWishlistItems((prevItems) =>
        prevItems.filter((item) => item._id !== wishlistItemId)
      );
    } catch (error) {
      console.error("Error removing product from wishlist", error);
    }
  };

  if (loading) {
    return <div>Loading wishlist...</div>;
  }

  if (products.length === 0) {
    return (
      <div className="max-w-[1360px] my-[80px] mx-auto text-center">
        Your wishlist is empty!
      </div>
    );
  }

  return (
    <div className="wishlist-page max-w-[1360px] my-[80px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => {
        const wishlistItem = wishlistItems.find(
          (item) => item.productId === product._id
        );

        return (
          <div key={product._id} className="relative">
            <ProductCard product={product} isInWishlist={true} />

            <button
              onClick={() => handleRemove(wishlistItem!._id, product._id)}
              className="font-bold p-2 cursor-pointer   bg-white rounded-full text-xl  absolute top-2 right-[10px]"
            >
              <HiOutlineXMark />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default WishlistPage;
