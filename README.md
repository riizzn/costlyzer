# Costlyzer – Amazon Price Tracker

**Costlyzer** helps users track Amazon product prices, find the best deals, and get notified when prices drop or products are back in stock.  

---

## Features

- Scrapes Amazon product pages for current prices  
- Tracks price history over time  
- Sends email alerts for:  
  - Price drops  
  - Restocked products  
- Add product links easily for tracking  
- Automated scraping with Cron jobs  

---

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS, Shadcn UI  
- **Backend / Scraping:** Node.js, Scraper API  
- **Database:** MongoDB  
- **Notifications:** Nodemailer  
- **Automation:** Cron jobs  

---

## Installation

1. Clone the repository:  
```bash
git clone https://github.com/your-username/costlyzer.git
cd costlyzer
````

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables in `.env`:

```
MONGO_URI=your_mongo_connection_string
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
SCRAPER_API_KEY=your_scraper_api_key
```

4. Start the development server:

```bash
npm run dev
```

---

## Usage

1. Open the app in your browser: `http://localhost:3000`
2. Enter an Amazon product link in the search bar
3. Costlyzer scrapes the product and updates its price history
4. Users receive email alerts for price drops or restocks

---

## License

For personal use / learning purposes.



