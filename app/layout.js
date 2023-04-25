import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import Script from "next/script";

export const metadata = {
  title: "Chal Naari - Ashes To Re-birth",
  description:
    "Chal Naari is a women empowerment NGO dedicated to supporting and uplifting women in need. Our programs and services are designed to help women build better lives for themselves and their families. Learn more about our mission, values, and how you can help make a positive impact in the lives of women and girls.",
  keywords:
    "women empowerment, gender equality, education, economic empowerment, health, advocacy, community outreach, social impact, women's rights, NGO, Chal Naari",
  openGraph: {
    type: "website",
    url: "https://chalnaari.com/",
    title: "Chal Naari - Ashes To Re-birth",
    sideName: "Chal Naari",
    description:
      "Chal Naari is a women empowerment NGO dedicated to supporting and uplifting women in need. Our programs and services are designed to help women build better lives for themselves and their families.",
    locale: "en-US",
  },
  twitter: {
    url: "https://chalnaari.com/",
    title: "Chal Naari - Ashes To Re-birth",
    description:
      "Chal Naari is a women empowerment NGO dedicated to supporting and uplifting women in need. Our programs and services are designed to help women build better lives for themselves and their families.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-CKSQY5XSP8"
      ></Script>
      <Script>
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CKSQY5XSP8');`}
      </Script>
      <body>
        <ScrollToTop />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
