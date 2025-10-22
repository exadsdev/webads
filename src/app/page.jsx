import Image from "next/image";
import Link from "next/link";
import JsonLd from "./components/JsonLd";
import Secsions from "./components/Secsions";
import { SITE, BRAND, LOGO_URL } from "./seo.config";
import Script from "next/script";
import Head from "next/head";

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL(SITE),
  title: `${BRAND} | ทำโฆษณาออนไลน์ Google & Facebook Ads`,
  description: `${BRAND} ผู้เชี่ยวชาญโฆษณาสายเทา วางกลยุทธ์ ตั้งค่า Conversion วัดผลครบถ้วน เน้นยอดขายและคุณภาพทราฟฟิก (Google Ads / Facebook Ads)`,
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: BRAND,
    title: `${BRAND} | ทำโฆษณาออนไลน์ Google & Facebook Ads`,
    description: `${BRAND} ผู้เชี่ยวชาญโฆษณาสายเทา วางกลยุทธ์ ตั้งค่า Conversion วัดผลครบถ้วน เน้นยอดขายและคุณภาพทราฟฟิก`,
    images: [
      {
        url: `${SITE}/images/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: `${BRAND} - โฆษณาออนไลน์สายเทา`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND} | ทำโฆษณาออนไลน์ Google & Facebook Ads`,
    description: `${BRAND} ผู้เชี่ยวชาญโฆษณาสายเทา วางกลยุทธ์ ตั้งค่า Conversion วัดผลครบถ้วน เน้นยอดขายและคุณภาพทราฟฟิก`,
    images: [`${SITE}/images/og-default.jpg`],
  },
};

const HERO_IMAGE = `${SITE}/images/og-default.jpg`;

export default function HomePage() {
  // === JSON-LD: WebSite ===
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND,
    url: SITE,
    publisher: {
      "@type": "Organization",
      name: BRAND,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // === JSON-LD: Organization ===
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND,
    url: SITE,
    logo: { "@type": "ImageObject", url: LOGO_URL },
  };

  // === JSON-LD: WebPage ===
  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: SITE,
    name: `${BRAND} | ทำโฆษณาออนไลน์ Google & Facebook Ads`,
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: HERO_IMAGE,
      width: 1200,
      height: 630,
    },
    isPartOf: { "@type": "WebSite", url: SITE, name: BRAND },
  };

  // === JSON-LD: Breadcrumb ===
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "หน้าแรก", item: SITE },
    ],
  };

  // === JSON-LD: Services (แทน Product สำหรับบริการ) ===
  const servicesLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Google Ads สายเทา",
      description:
        "บริการรับทำโฆษณา Google Ads สายเทา เน้น Conversion และคุณภาพทราฟฟิก พร้อมวัดผลแบบครบถ้วน",
      provider: { "@type": "Organization", name: BRAND, url: SITE },
      areaServed: "TH",
      offers: {
        "@type": "Offer",
        url: `${SITE}/services/google-ads`,
        priceCurrency: "THB",
        price: "12900",
        priceValidUntil: "2025-12-31",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Facebook Ads สายเทา",
      description:
        "บริการรับทำโฆษณา Facebook Ads สายเทา วางกลยุทธ์ ครีเอทีฟ และ Conversion API เพื่อผลลัพธ์ที่วัดได้",
      provider: { "@type": "Organization", name: BRAND, url: SITE },
      areaServed: "TH",
      offers: {
        "@type": "Offer",
        url: `${SITE}/services/facebook-ads`,
        priceCurrency: "THB",
        price: "9900",
        priceValidUntil: "2025-12-31",
        availability: "https://schema.org/InStock",
      },
    },
  ];

  // === JSON-LD: Product (ตัวอย่างตามที่ส่งมา) ===
  const productLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Executive Anvil",
    image: [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg",
    ],
    description:
      "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
    sku: "0446310786",
    mpn: "925872",
    brand: {
      "@type": "Brand",
      name: "ACME",
    },
    review: {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: 4, bestRating: 5 },
      author: { "@type": "Person", name: "Fred Benson" },
    },
    aggregateRating: { "@type": "AggregateRating", ratingValue: 4.4, reviewCount: 89 },
    offers: {
      "@type": "AggregateOffer",
      offerCount: 5,
      lowPrice: 119.99,
      highPrice: 199.99,
      priceCurrency: "USD",
    },
  };

  // === JSON-LD: ImageObject ของรูปฮีโร่ (เพิ่มตามที่ร้องขอ) ===
  const heroImageLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: HERO_IMAGE,
    url: HERO_IMAGE,
    width: 1200,
    height: 630,
    caption: `${BRAND} - ตัวอย่างผลงานการทำโฆษณาและแดชบอร์ดสรุปผล`,
  };

  return (
    <>
 
  


      <nav className="container" aria-label="เมนูหลัก">
        <ul className="nav">
          <li><Link href="/" prefetch>หน้าแรก</Link></li>
          <li><Link href="/services" prefetch>บริการ</Link></li>
          <li><Link href="/services/google-ads" prefetch>Google Ads</Link></li>
          <li><Link href="/services/facebook-ads" prefetch>Facebook Ads</Link></li>
          <li><Link href="/course" prefetch>คอร์สเรียนยิงAds</Link></li>
          <li><Link href="/posts" prefetch>Video</Link></li>
          <li><Link href="/faq" prefetch>FAQ</Link></li>
          <li><Link href="/search" prefetch>search</Link></li>
           <li><Link href="/contact" prefetch>ติดต่อเรา</Link></li>
        </ul>
      </nav>

    
      <header className="hero container" aria-labelledby="hero-title">
        <div className="hero__text">
          <h1 id="hero-title" className="mb-2">
            <strong>รับยิงแอด สายเทา</strong> & รับทำโฆษณาสายเทา <br />
            ครอบคลุม Google Ads และ Facebook Ads
          </h1>
          <p className="text-muted">
            เริ่มโฆษณาก่อน ชำระเงินทีหลัง ผู้เชี่ยวชาญสายแคมเปญและคอนเวอร์ชัน วิเคราะห์คำค้น/ออดิเอนซ์
            วางโครงสร้างคอนเทนต์เพื่อ SEO และเสริมความน่าเชื่อถือด้วย Structured Data
          </p>

          <div className="btn-row">
            <Link className="btn primary btn--block-sm" href="/services/google-ads" prefetch>
              เริ่มที่ Google Ads
            </Link>
            <Link className="btn btn--ghost btn--block-sm" href="/services/facebook-ads" prefetch>
              ดูบริการ Facebook Ads
            </Link>
          </div>

          <ul className="meta" aria-label="จุดเด่นบริการ">
            <li>ขึ้นแอดโฆษณา ชำระเงินภายหลัง</li>
            <li><strong>รับยิงแอด สายเทา</strong> Google</li>
            <li><strong>รับยิงแอด สายเทา</strong> Facebook</li>
          </ul>
        </div>

        <div className="hero__media">
          <Image
            src="/images/og-default.jpg"
            alt="ตัวอย่างผลงานการทำโฆษณาและแดชบอร์ดสรุปผล"
            width={1200}
            height={630}
            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 90vw, 1200px"
            priority
            className="hero__img"
          />
        </div>
      </header>

      {/* PACKAGES */}
      <section className="section container" aria-labelledby="pkg-title">
        <h2 id="pkg-title" className="mb-3">
          แพ็กเกจยอดนิยมสำหรับธุรกิจสายเทา <strong>รับยิงแอด สายเทา</strong>
        </h2>

        <div className="cards-grid">
          <article className="card" itemScope itemType="https://schema.org/Service">
            <header><h3 itemProp="name">🌎 Google Ads สายเทา</h3></header>
            <p itemProp="description">ค้นหาตรงกลุ่ม เน้นคุณภาพทราฟฟิกและ Conversion API</p>
            <p className="price">ราคา: 12,900 บาท/เดือน</p>
            <Link className="btn w-100" href="/services/google-ads" prefetch>✔ รายละเอียด</Link>
          </article>

          <article className="card" itemScope itemType="https://schema.org/Service">
            <header><h3 itemProp="name">☑ Facebook Ads สายเทา</h3></header>
            <p itemProp="description">ครีเอทีฟ + Conversion API ปรับแต่งต่อเนื่อง</p>
            <p className="price">ราคา: 9,900 บาท/เดือน</p>
            <Link className="btn w-100" href="/services/facebook-ads" prefetch>💥 รายละเอียด</Link>
          </article>

          <article className="card">
            <header><h3>✔ SEO + Content</h3></header>
            <p>วางโครงสร้างคอนเทนต์ สร้าง FAQ/Service Page/Internal Linking</p>
            <Link className="btn w-100" href="/faq" prefetch>👂 ดู FAQ</Link>
          </article>

          <article className="card">
            <header><h3>🟢 คอร์สเรียนยิงAds สายเทา</h3></header>
            <p>คอร์ส Google/Facebook สายเทา</p>
            <Link className="btn w-100" href="/course" prefetch>👀 ดูคอร์สเรียน</Link>
          </article>

          <article className="card">
            <header><h3>▶ Video สอนยิงแอด สายเทา</h3></header>
            <p>ฟรีความรู้การทำโฆษณา Google/Facebook</p>
            <Link className="btn w-100" href="/posts" prefetch>▶ ดู Video สอนฟรี</Link>
          </article>
        </div>
      </section>

      {/* TRUST */}
      <section className="container" aria-label="จุดเด่นและความน่าเชื่อถือ">
        <div className="badges-grid">
          <div className="card card--pad"><strong>แผนงานชัดเจน</strong><p className="text-muted">Roadmap รายเดือน + KPI</p></div>
          <div className="card card--pad"><strong>โปร่งใสตรวจสอบได้</strong><p className="text-muted">รายงานผล/Insight ใช้ได้จริง</p></div>
          <div className="card card--pad"><strong>โครงสร้างแคมเปญคุณภาพ</strong><p className="text-muted">Search/Discovery/Remarketing ครบ</p></div>
        </div>
      </section>

      {/* CTA */}
      <section className="container" aria-label="ติดต่อทีมงาน">
        <div className="cta">
          <div>
            <h2 className="h4">เริ่มต้นวางแผนโฆษณาให้ธุรกิจของคุณ</h2>
            <p className="text-muted">คุยเป้าหมาย งบ และกลยุทธ์ที่เหมาะสม</p>
          </div>
          <div className="btn-row">
            <Link className="btn primary btn--block-sm" href="/contact" prefetch>ติดต่อเรา</Link>
            <Link className="btn btn--ghost btn--block-sm" href="/services" prefetch>ดูบริการทั้งหมด</Link>
          </div>
        </div>
      </section>

      <Secsions />

     
      <JsonLd json={websiteLd} />
      <JsonLd json={orgLd} />
      <JsonLd json={webPageLd} />
      <JsonLd json={breadcrumbLd} />
      {servicesLd.map((s, i) => <JsonLd key={`svc-${i}`} json={s} />)}
      <JsonLd json={productLd} />
      <JsonLd json={heroImageLd} />
    </>
  );
}
