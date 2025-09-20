"use server";

import { connectToDB } from "../mongoose";
import { scrapeAmazonProduct } from "../scraper";

export async function scrapAndStoreProduct(productUrl: string) {
  if (!productUrl) return;
  try {
    connectToDB()
    const scrapedProduct = await scrapeAmazonProduct(productUrl);
    if (!scrapedProduct) return;

  } catch (error: any) {
    throw new Error(`Failed to create/update product:${error.message}`);
  }
}
