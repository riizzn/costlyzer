import axios from "axios";
import * as cheerio from "cheerio";
import { extractDescription, extractPrice, selectCurrency } from "../utils";

export async function scrapeAmazonProduct(url: string) {
  if (!url) return;
  const apiKey = process.env.SCRAPERAPI_KEY;

  if (!apiKey) {
    throw new Error("Scraper API key not found");
  }

  try {
    const response = await axios.get(url, {
      proxy: {
        protocol: "http", // Or 'https'
        host: "proxy-server.scraperapi.com",
        port: 8001,
        auth: {
          username: "scraperapi",
          password: apiKey,
        },
      },
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
      //   timeout: 30000,
    });

    const $ = cheerio.load(response.data);
    const title = $("#productTitle").text().trim();
    const currentPrice = extractPrice(
      $(".priceToPay .a-price-whole"),
      $("a.size.base.a-color-price"),
      $(".a-button-selected .a-color-base"),
      $(".a-price.a-text-price")
    );
    const orginalPrice = extractPrice(
      $(".basisPrice .a-offscreen"),
      $("#priceblock_ourprice"),
      $("#priceblock_dealprice"),
      $("#listPrice"),
      $(".a-size-base.a-color-price")
    );
    const outOfStock =
      $("#availablity span").text().trim().toLowerCase() ===
      "currently unavailable";

    const images =
      $("#imgBlkFront").attr("data-a-dynamic-image") ||
      $("#landingImage").attr("data-a-dynamic-image");
    const imageUrls = images ? Object.keys(JSON.parse(images)) : [];
    const currency = $(".a-price-symbol").first().text().trim();
    const discountRate = $(".savingsPercentage").text().replace(/[-%]/g, "");
    const category = $(".a-list-item .a-color-tertiary").first().text().trim();
    const rating = $("#acrPopover .a-color-base").first().text().trim();
    const text = $("#acrCustomerReviewText").first().text().trim();
    const reviewCount = parseInt(text.replace(/[^\d]/g, ""), 10) || 0;
    const description = extractDescription($);
    //Construct data object with scraped information
    const data = {
      url,
      image: imageUrls[0],
      currency: currency || "$",
      title,
      currentPrice: Number(currentPrice) || Number(orginalPrice),
      orginalPrice: Number(orginalPrice) || Number(currentPrice),
      priceHistory: [],
      discountRate: Number(discountRate),
      category,
      reviewCount,
      stars: Number(rating),
      isOutOfStock: outOfStock,
      description,
      lowestPrice: Number(currentPrice) || Number(orginalPrice),
      highestPrice: Number(orginalPrice) || Number(currentPrice),
      average: Number(currentPrice) || Number(orginalPrice),
    };
    return data;
  } catch (error) {
    throw new Error(`Failed to scrape product: ${error.message}`);
  }
}
