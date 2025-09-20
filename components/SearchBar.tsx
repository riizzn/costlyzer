"use client";
import { scrapAndStoreProduct } from "@/lib/actions";
import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isValidAmazonProductURL = (url: string) => {
    try {
      const parsedURL = new URL(url);
      const hostname = parsedURL.hostname;
      if (
        hostname.includes("amazon.com") ||
        hostname.includes("amazon.") ||
        hostname.endsWith("amazon")
      ) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  };
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidLink = isValidAmazonProductURL(query);
    // here you are checking if it is even a URL
    if (!isValidLink) setMessage("Enter a valid link.");

    try {
      setIsLoading(true);
     //scrape the product page 
     const product= await scrapAndStoreProduct(query)
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {message && (
        <p className=" text-sm text-red-800 self-start mt-10 ">{message}</p>
      )}
      <form
        className={`flex flex-wrap gap-4 items-start ${
          message ? "mt-2" : "mt-12"
        }`}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setMessage("");
          }}
          placeholder="Enter product link"
          className="searchbar-input"
        />

        <button type="submit" className="searchbar-btn ">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
