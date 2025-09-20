import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link
      href={`/products/${product._id}`}
      className="group product-card relative border border-gray-200 p-5 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
    >
      {/* Image Section */}
      <div className="relative flex items-center justify-center bg-white-200 rounded-xl overflow-hidden">
        {product.discountRate && (
          <span className="absolute top-3 left-3 bg-primary-pink text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md">
            -{product.discountRate}%
          </span>
        )}
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="product-card_img transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-col gap-3 mt-3">
        <h3 className="product-title line-clamp-2">{product.title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm capitalize">{product.category}</p>
          <p className="text-primary text-lg font-bold">
            {product.currency} {product.currentPrice}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
