/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import { Product } from "../../type/product";
import Image from "next/image";
import { ImFire } from "react-icons/im";
import { IoEyeOutline } from "react-icons/io5";
import { IoBarChartOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { GoShareAndroid } from "react-icons/go";
import { SlCloudUpload } from "react-icons/sl";
import { PiHeartThin } from "react-icons/pi";
import { HiOutlineArrowPath } from "react-icons/hi2";
import { IoIosRefresh, IoMdCheckmark } from "react-icons/io";
import { LuClock } from "react-icons/lu";
import {
  TbWashDrycleanOff,
  TbWashDryHang,
  TbWashPress,
  TbWiperWash,
} from "react-icons/tb";
import { MdOutlineWash } from "react-icons/md";
import ProductCard from "@/components/productCard";
import DetailSkeleton from "@/components/detailSkeleton";
import CommonBreadcrumbs from "@/components/breadCrumbs";

interface ProductDetailPageProps {
  params: { title: string };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/product/all?collectionName=Art%20by%20Saviola"
        );
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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
        setCurrentImage(data.product.smallCardImage);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [params.title]);

  if (!product)
    return (
      <div>
        <DetailSkeleton />
      </div>
    );

  const handleImageClick = (image: string) => {
    setCurrentImage(image);
  };

  return (
    <div className="flex flex-col items-center justify-center py-[20px]">
      <div className="w-[1360px] justify-center flex flex-col items-between pb-[100px]">
        <div className="flex justify-between w-full mb-[20px]">
          <CommonBreadcrumbs />
          <div>nese bir icon</div>
        </div>

        <div className="flex gap-[80px]">
          <div className="flex gap-[15px]  sticky top-[210px] h-full">
            <div className="flex flex-col gap-[10px]">
              {product.detailImages && product.detailImages.length > 0 ? (
                product.detailImages.map((image, index) => (
                  <div
                    key={index}
                    className="w-[80px] h-[80px]"
                    onClick={() => handleImageClick(image)}
                  >
                    <Image
                      src={image}
                      alt={`Detail ${index + 1}`}
                      className="object-cover w-full h-full cursor-pointer"
                      width={70}
                      height={70}
                    />
                  </div>
                ))
              ) : (
                <p>No detail images available.</p>
              )}
            </div>

            <div className="w-[555px] h-[555px]">
              <Image
                src={currentImage || product.smallCardImage}
                alt={product.title}
                className="object-cover w-full h-full"
                width={555}
                height={555}
              />
            </div>
          </div>
          <div className="overflow-auto h-full">
            <div className="border-b-[1px] border-b-gray-300 border-b-solid py-[10px]">
              <h2 className="uppercase text-[#757575] pb-[10px]">
                {product.name}
              </h2>
              {product.isNewProduct && (
                <div className="bg-[#ac2929] w-[60px]  text-white py-1 px-3  mb-2">
                  New
                </div>
              )}
              <h2 className="text-[30px] text-[#222]">{product.title}</h2>
              <div className="flex text-[18px] pb-[15px] pt-[5px] ml-[70px] gap-[10px] items-center">
                <span className="text-[#555]">{product.reviews} reviews</span>
                <ImFire className="text-red-800" />
                <span>{product.sold} sold in last 16 hours</span>
              </div>
              <div className="flex items-center gap-[10px] py-[10px]">
                <div className="text-[20px] text-[#222]">
                  ${product.newPrice}.00
                </div>
                {product.oldPrice && (
                  <div className="text-gray-400 text-[16px] text-end line-through font-[300]">
                    ${product.oldPrice}.00
                  </div>
                )}
              </div>
              <div className="text-[18px] text-[#555] pb-[10px]">
                This regulator has a rolled diaphragm and high flow rate with
                reduced pressure drop.It has an excellent degree of
                condensation.
              </div>
              <div className="flex gap-[7px] items-center py-[10px]">
                <IoEyeOutline /> 25 people are viewing this right now
              </div>
              <div className="flex gap-[20px] text-[18px] text-[#222] py-[10px]">
                <div className="flex items-center gap-[5px]">
                  <IoBarChartOutline />
                  Size guide
                </div>
                <div className="flex items-center gap-[5px]">
                  <GoQuestion />
                  Ask a Question
                </div>
                <div className="flex items-center gap-[5px]">
                  <GoShareAndroid />
                  Share
                </div>
              </div>
            </div>
            <div className="py-[20px]">
              <div className="text-[500]">Add your personalization</div>
              <div className="py-[20px] text-[#555]">
                Add your name, note or upload your customized idea image to
                personalise your item. Custom items cannot be returned or
                exchanged.
              </div>
              <input
                type="text"
                placeholder="Customize note"
                className="px-[20px] py-[10px] border-solid border-[1px] border-[#e5e5e5] outline-none w-full placeholder-gray-700 focus:border-[1px] focus:border-solid focus:border-black"
              />
              <div className="flex items-center pl-[20px]  my-[10px] space-x-2 w-full justify-between  border-[1px] border-solid border-[#e5e5e5]">
                <span className="text-gray-700">No file chosen</span>
                <input id="file-upload" type="file" className="hidden" />
                <label
                  htmlFor="file-upload"
                  className="flex items-center cursor-pointer bg-[#f5f5f5] px-4  py-[10px]  text-gray-700"
                >
                  <SlCloudUpload className="mr-2 text-[16px]" /> Upload Image
                </label>
              </div>
              <div className="flex gap-[10px] w-full h-[50px]">
                <div className="flex flex-1 w-full border-solid border-[2px] border-gray-300">
                  <div className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
                    -
                  </div>

                  <div className="flex-1 flex justify-center items-center">
                    1
                  </div>

                  <div className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer">
                    +
                  </div>
                </div>

                <div className="uppercase w-full bg-[#222222] h-[50px] text-white py-[15px] font-[500] text-center flex-2">
                  Add to Cart
                </div>

                <div className="flex-1 flex w-full gap-[5px]">
                  <div className="border-solid border-[2px] flex justify-center items-center border-gray-300 w-[50px] h-[50px]">
                    <PiHeartThin className="text-[26px]" />
                  </div>

                  <div className="border-solid border-[2px] flex justify-center items-center border-gray-300 w-[50px] h-[50px]">
                    <HiOutlineArrowPath className="text-[26px] text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center py-[10px]">
              <input
                type="checkbox"
                id="terms"
                className="w-[16px] h-[16px] mr-[10px]"
              />
              <label htmlFor="terms" className="cursor-pointer">
                I agree with Terms & Conditions
              </label>
            </div>
            <div className="uppercase  w-full bg-[#e3e1e1] h-[50px]  py-[15px] font-[500] text-center  text-[#222]">
              Buy it now
            </div>
            <div className="text-[#555] pb-[20px]">
              <div className="flex gap-[5px] items-center pt-[10px]">
                <IoMdCheckmark />
                Pickup available at{" "}
                <span className="font-[500] text-black">Shop location.</span>
                Usually ready in 24 hours
              </div>
              <div className="flex gap-[5px] items-center py-[10px]">
                <LuClock />
                Estimate delivery times:{" "}
                <span className="font-[500] text-black"> 12-26 days</span>{" "}
                (International),{" "}
                <span className="font-[500] text-black"> 3-6 days</span> (United
                States).
              </div>
              <div className="flex gap-[5px] items-center pb-[10px]">
                <IoIosRefresh /> Return within{" "}
                <span className="font-[500] text-black"> 45 days</span> of
                purchase. Duties & taxes are non-refundable.
              </div>
            </div>
            <div className="py-[20px] border-t-solid border-t-gray-300 border-t-[1px] ">
              <div className="flex items-center mb-[5px] gap-[5px]">
                <span className=" mr-[5px] w-[80px]">SKU:</span>
                <span className="text-[#757575]">N/A</span>
              </div>
              <div className="flex items-center mb-[5px] gap-[5px]">
                <span className=" mr-[5px] w-[80px]">Available:</span>
                <span className="text-[#757575]">In Stock</span>{" "}
              </div>
              <div className="flex items-center mb-[5px] gap-[5px]">
                <span className=" mr-[5px] w-[80px]">Vendor:</span>
                <span className="text-[#757575]">Champion</span>
              </div>
              <div className="flex gap-[5px]">
                <span className=" mr-[5px] w-[80px] gap-[5px]">
                  Collections:
                </span>
                <span className="text-[#757575]">
                  Accessories, Bracelets, Earrings, Featured, Home Page,
                  Necklaces, Rings
                </span>
              </div>
            </div>
            <div className="relative border border-gray-300 w-full mx-auto my-[20px] px-[20px] py-[22px]">
              <div className="absolute -top-[10px] left-1/2 transform -translate-x-1/2 bg-white px-[10px] text-center font-semibold">
                Guarantee Safe Checkout
              </div>

              <Image
                src="https://demo-alukas.myshopify.com/cdn/shop/files/trust_badge.png?v=1712024964&width=533"
                alt="Trust Badge"
                className="mx-auto"
                width={410}
                height={36}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col justify-center items-center ">
        <div className="py-[50px]border-t-solid border-t-[1px] w-full flex flex-col items-center border-t-gray-300">
          <div className="flex gap-[50px] text-[26px] py-[20px]  ">
            <div>Description</div>
            <div>Customer Reviews</div>
            <div>Shipping & Returns</div>
            <div>Return Policies</div>
          </div>
          <div className="w-[1360px] text-[#555]">
            <div className="flex gap-[50px] py-[10px] ">
              <div className="flex-1">
                <h4 className="text-[20px] text-[#222] font-[500] py-[10px]">
                  Outstanding Features
                </h4>
                <div className="text-[18px]">
                  <p className="mb-[20px]">
                    The garments labelled as committed are products that have
                    been produced using sustainable fibres or processes,
                    reducing their environmental impact. Umino’s goal is to
                    support the implementation of practices more committed to
                    the environment.
                  </p>
                  <p>
                    <p>– Tonal stitching: 98% cotton, 2% elastane.</p>
                    <p>– Supple and stretch knit with a rich touch of wool.</p>
                    <p>– Model: Model is 6′1″, wearing a size M.</p>
                    <p>
                      – Caring for your clothes is caring for the environment.
                    </p>
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-[20px] text-[#222] font-[500] py-[10px]">
                  Washing Instructions
                </h4>
                <div className="text-[18px]">
                  <div className="flex gap-[10px] items-center mb-[10px]">
                    <TbWashPress className="text-[34px]" /> Machine wash max.
                    30ºC. Short spin.
                  </div>
                  <div className="flex gap-[10px] items-center mb-[10px]">
                    <TbWashDrycleanOff className="text-[34px]" />
                    Iron maximum 110ºC.
                  </div>
                  <div className="flex gap-[10px] items-center mb-[10px]">
                    <TbWiperWash className="text-[34px]" />
                    Do not bleach/bleach.
                  </div>
                  <div className="flex gap-[10px] items-center mb-[10px]">
                    <MdOutlineWash className="text-[34px]" />
                    Do not dry clean.
                  </div>
                  <div className="flex gap-[10px] items-center mb-[10px]">
                    <TbWashDryHang className="text-[34px]" />
                    Tumble dry, medium hear.
                  </div>
                </div>
              </div>
            </div>
            <div className="text-[18px] py-[30px]">
              We work with monitoring programmes to ensure compliance with our
              social, environmental and health and safety standards for our
              garments. To assess compliance, we have developed a programme of
              audits and continuous improvement plans. Made of super-soft
              cotton, the Organic Cotton Cutaway Tank features a high neck and
              back, and a slight curve at the shoulders, which makes it extra
              flattering. If there’s one thing the ’90s got right, it’s the
              basics.
            </div>
          </div>
        </div>
        <div className="w-[1360px] flex flex-col items-center py-[50px]">
          <h2 className="text-[40px] text-[#222]">People Also Bought</h2>
          <p className="text-[20px] text-[#555]">
            Here’s some of our most similar products people are buying. Click to
            discover trending style.
          </p>
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${(currentIndex * 100) / 4}%)`,
              }}
            >
              {products.map((item) => (
                <div
                  key={item.id}
                  className="w-[25%] flex-shrink-0 flex-grow-0 p-2 py-[40px] overflow-hidden"
                >
                  <ProductCard products={[item]} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
