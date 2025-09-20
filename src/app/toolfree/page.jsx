import Image from "next/image";
import JsonLd from "@/app/components/JsonLd";
import { SITE, BRAND, LOGO_URL } from "@/app/seo.config";
import ToolfreeClient from "./ToolfreeClient";

const site = process.env.NEXT_PUBLIC_SITE_URL || SITE;

export const metadata = {
  metadataBase: new URL(site),
  title: "ดาวน์โหลดเครื่องมือทำการตลาดฟรี | Facebook & Google | myads.dev",
  description:
    "ดาวน์โหลด Landing Page ฟรี สำหรับยิงแอด Facebook และ Google สายเทา พร้อมใช้งานทันที ไม่มีค่าใช้จ่าย",
  alternates: { canonical: `${site}/toolfree` },
  openGraph: {
    type: "website",
    url: `${site}/toolfree`,
    title: "ดาวน์โหลดเครื่องมือทำการตลาดฟรี - Facebook & Google",
    description:
      "ดาวน์โหลด Landing Page พร้อมใช้งานฟรี สำหรับ Facebook และ Google",
    images: [
      {
        url: `${site}/images/toolfree.jpg`,
        width: 1200,
        height: 630,
        alt: "ดาวน์โหลดเครื่องมือทำการตลาดฟรี",
      },
    ],
    siteName: BRAND,
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "ดาวน์โหลดเครื่องมือทำการตลาดฟรี - Facebook & Google",
    description:
      "ดาวน์โหลด Landing Page พร้อมใช้งานฟรี สำหรับ Facebook และ Google",
    images: [`${site}/images/toolfree.jpg`],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function ToolfreePage() {
  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "ดาวน์โหลดเครื่องมือทำการตลาดฟรี - Facebook และ Google",
    url: `${site}/toolfree`,
    description:
      "ดาวน์โหลดฟรี! เครื่องมือ Landing Page สำหรับยิงแอด Facebook และ Google สายเทา ดาวน์โหลดทันทีไม่มีค่าใช้จ่าย",
    publisher: {
      "@type": "Organization",
      name: BRAND,
      url: site,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    image: `${site}/images/toolfree.jpg`,
    inLanguage: "th-TH",
  };

  return (
    <>
      <JsonLd data={webPageLd} />

      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="h3">ดาวน์โหลดเครื่องมือทำการตลาดฟรี</h1>
          <p className="text-muted mb-0">
            Landing Page สำหรับยิงแอด <strong>Facebook</strong> และ{" "}
            <strong>Google</strong> พร้อมใช้งานทันที
          </p>
        </div>

        <ToolfreeClient />
      </div>
    </>
  );
}
