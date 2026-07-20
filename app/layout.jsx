import localFont from "next/font/local";
import "./globals.css";
import "../public/css/2lyuxktun1o1i.css";
import "../public/css/2znmlrrza9r17.css";
import "../public/css/26y1vzq3hske3.css";
import "../public/css/12f17doq-i2ll.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const angelList = localFont({
  src: [
    {
      path: "../public/fonts/AngelList_VF-s.p.23oth6-f3ksow.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/fonts/AngelList_Italic_VF-s.p.3m35a5gtnh59q.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-angellist",
});

const angelListDisplay = localFont({
  src: "../public/fonts/AngelListDisplay_Regular-s.p.3aqs72bq8mtof.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-angellist-display",
});

export const metadata = {
  title: "AngelList – Build, Lead, Invest",
  description: "AngelList builds the infrastructure that powers the startup economy—providing investors and innovators with the tools to grow.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="angellist_815877f3-module__jfoAEW__variable angellistdisplay_40edd88b-module__WWcr0a__variable dm_mono_c82cc346-module__FXpxBG__variable source_code_pro_89dfcb87-module__W2Laha__variable"
      data-theme="light"
      suppressHydrationWarning
    >

      <body suppressHydrationWarning>
        <div hidden>
          {/* SVG definitions if any could go here */}
        </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
