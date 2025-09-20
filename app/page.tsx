import HeroCarousel from "@/components/HeroCarousel";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import React from "react";
import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard";

const Home = async() => {
  const allProducts= await getAllProducts()
  return (
    <>
    <section className="px-6 md:px-20 py-24 border-2">
      <div className="flex justify-between max-lg:flex-col gap-16">
        <div className="flex flex-col justify-center">
          <p className="text-primary  tracking-tight">
            Smart Shopping Starts Here:
            <Image
              className="inline-flex"
              src="/assets/icons/download.svg"
              width={16}
              height={16}
              alt="arrow-right"
            />
          </p>
          <h1 className="head-text ">
            Unleash the Power of <span className="text-primary">Costlyzer</span>
          </h1>
          <p className="tracking-tight mt-4">
            Because when you shop, the best price should be right in front of
            you, clear, simple, and easy to find.
          </p>
          <SearchBar/>
        </div>
        <HeroCarousel/>
      </div>

    </section>
    <section className="trending-section">
      <h2 className="section-text">Trending</h2>
      <div className="flex flex-wrap gap-x-8 gap-y-16">
        {allProducts?.map((product)=>(
          <ProductCard key={product._id} product={product}/>
        ))}


      </div>
    </section>
    </>
  );
};

export default Home;
