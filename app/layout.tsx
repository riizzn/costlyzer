import type { Metadata } from "next";
import { Inter, Space_Grotesk} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";


const inter =  Inter({
  variable: "--font-family-inter",
  subsets: ["latin"],
});

const spaceGrotesk =  Space_Grotesk({
  variable: "--font-family-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Costlyzer",
  description: "Track prices effortlessly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <main className="max-w-10xl  mx-auto"> 
          <NavBar/>
            {children}</main>
     
      </body>
    </html>
  );
}
