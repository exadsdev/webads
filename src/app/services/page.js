import Image from "next/image";
import Link from "next/link";
import JsonLd from "../components/JsonLd";
import { SITE, BRAND, LOGO_URL } from "../seo.config";

export const dynamic = "force-static";

const PAGE_URL = `${SITE}/services`;
const OG_IMAGE = `${SITE}/images/services-hero.jpg`; // แนะนำให้มีไฟล์นี้ 1200x630

export const metadata = {
  metadataBase: new URL(SITE),
  title: `บริการโฆษณาออนไลน์ | ${BRAND}`,
  description:
    `${BRAND} บริการรับทำโฆษณาออนไลน์สายเทา ครอบคลุม Google Ads และ Facebook Ads วางกลยุทธ์ ตั้งค่า Conversion วัดผลครบถ้วน โฟกัสยอดขายและคุณภาพทราฟฟิก`,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: BRAND,
    title: `บริการโฆษณาออนไลน์ | ${BRAND}`,
    description:
      `${BRAND} บริการโฆษณาออนไลน์สายเทา Google Ads และ Facebook Ads เพื่อผลลัพธ์ที่วัดได้`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${BRAND} Services` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `บริการโฆษณาออนไลน์ | ${BRAND}`,
    description:
      `${BRAND} บริการโฆษณาออนไลน์สายเทา Google Ads และ Facebook Ads เพื่อผลลัพธ์ที่วัดได้`,
    images: [OG_IMAGE],
  },
};

export default function ServicesPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "หน้าแรก", item: SITE },
      { "@type": "ListItem", position: 2, name: "บริการ", item: PAGE_URL },
    ],
  };

  const webpageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `บริการโฆษณาออนไลน์ | ${BRAND}`,
    url: PAGE_URL,
    isPartOf: { "@type": "WebSite", name: BRAND, url: SITE },
    primaryImageOfPage: {
      "@type": "ImageObject",
      contentUrl: OG_IMAGE,
      url: OG_IMAGE,
      width: 1200,
      height: 630,
    },
  };

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListOrder: "http://schema.org/ItemListOrderAscending",
    numberOfItems: 2,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: `${SITE}/services/google-ads`,
        item: {
          "@type": "Service",
          name: "Google Ads สายเทา",
          provider: { "@type": "Organization", name: BRAND, url: SITE, logo: LOGO_URL },
          areaServed: "TH",
          offers: {
            "@type": "Offer",
            price: 12900,
            priceCurrency: "THB",
            url: `${SITE}/services/google-ads`,
            priceValidUntil: "2025-12-31",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        url: `${SITE}/services/facebook-ads`,
        item: {
          "@type": "Service",
          name: "Facebook Ads สายเทา",
          provider: { "@type": "Organization", name: BRAND, url: SITE, logo: LOGO_URL },
          areaServed: "TH",
          offers: {
            "@type": "Offer",
            price: 9900,
            priceCurrency: "THB",
            url: `${SITE}/services/facebook-ads`,
            priceValidUntil: "2025-12-31",
          },
        },
      },
    ],
  };

  return (
    <>
      <nav className="container" aria-label="เมนูย่อย">
        <ul className="nav">
          <li><Link href="/" prefetch>หน้าแรก</Link></li>
          <li aria-current="page">บริการ</li>
        </ul>
      </nav>

      <header className="container my-4">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <h1 className="mb-3">บริการโฆษณาออนไลน์</h1>
            <p className="text-muted">
              เลือกแพลตฟอร์มที่เหมาะกับธุรกิจของคุณ ระหว่าง Google Ads และ Facebook Ads
              ตั้งค่า Conversion ครบถ้วน รายงานโปร่งใส โฟกัสยอดขายและคุณภาพทราฟฟิก
            </p>
          </div>
          <div className="col-lg-6">
            <Image
              src="/images/review.jpg"
              alt="บริการโฆษณาออนไลน์ Google Ads และ Facebook Ads"
              width={1200}
              height={630}
              className="w-100 rounded-4 shadow-sm"
              priority
            />
          </div>
        </div>
      </header>

      <main className="container pb-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <article className="card h-100 border-0 shadow-sm">
              <div className="ratio ratio-16x9">
                <Image
                  src="/img/gg.jpg"
                  alt="บริการ Google Ads สายเทา"
                  width={1200}
                  height={675}
                  className="object-fit-cover rounded-top"
                />
              </div>
              <div className="card-body">
                <h2 className="h4">Google Ads สายเทา</h2>
                <p className="text-muted mb-3">
                  เน้นค้นหาตรงกลุ่มด้วย Search / Performance Max / Remarketing
                  วัดผลด้วย Conversion API และปรับแต่งคำค้นเชิงลึก
                </p>
                <ul className="small text-muted mb-3">
                  <li>ตั้งค่า Conversion ครบถ้วน + Enhanced</li>
                  <li>โครงสร้างแคมเปญยืดหยุ่นและวัดผลได้</li>
                  <li>รายงานโปร่งใสพร้อม Insight ที่ใช้งานได้จริง</li>
                </ul>
                <Link href="/services/google-ads" prefetch className="btn btn-outline-primary w-100">
                  ไปที่บริการ Google Ads
                </Link>
              </div>
              <div className="card-footer bg-white border-0 pt-0">
                <span className="badge text-bg-light">เริ่มต้น 12,900 บาท/เดือน</span>
              </div>
            </article>
          </div>

          <div className="col">
            <article className="card h-100 border-0 shadow-sm">
              <div className="ratio ratio-16x9">
                <Image
                  src="/images/facebook_ads.webp"
                  alt="บริการ Facebook Ads สายเทา"
                  width={1200}
                  height={675}
                  className="object-fit-cover rounded-top"
                />
              </div>
              <div className="card-body">
                <h2 className="h4">Facebook Ads สายเทา</h2>
                <p className="text-muted mb-3">
                  เข้าถึงกลุ่มเป้าหมายด้วยครีเอทีฟหลากหลาย รูป/วิดีโอ/UGC
                  เชื่อม Conversion API ลดการสูญเสียสัญญาณ ติดตามผลได้แม่นยำ
                </p>
                <ul className="small text-muted mb-3">
                  <li>แยกกลุ่มเป้าหมายตาม Funnel ชัดเจน</li>
                  <li>ทดสอบครีเอทีฟและข้อความโฆษณาอย่างเป็นระบบ</li>
                  <li>รีพอร์ตสม่ำเสมอ + แนวทางปรับปรุงต่อรอบ</li>
                </ul>
                <Link href="/services/facebook-ads" prefetch className="btn btn-outline-primary w-100">
                  ไปที่บริการ Facebook Ads
                </Link>
              </div>
              <div className="card-footer bg-white border-0 pt-0">
                <span className="badge text-bg-light">เริ่มต้น 9,900 บาท/เดือน</span>
              </div>
            </article>
          </div>
        </div>

        <section className="mt-5">
          <div className="p-4 p-md-5 border rounded-4 bg-light">
            <h2 className="h5 mb-2">ยังไม่แน่ใจว่าจะเลือกแพลตฟอร์มไหน?</h2>
            <p className="text-muted mb-3">
              คุยกับทีมงานเพื่อประเมินธุรกิจ เป้าหมาย งบประมาณ และเลือกแพลตฟอร์มที่เหมาะสมที่สุด
            </p>
            <div className="d-flex gap-2 flex-wrap">
              <Link href="/contact" prefetch className="btn btn-outline-primary">ติดต่อเรา</Link>
              <Link href="/" prefetch className="btn btn-outline-secondary">กลับหน้าแรก</Link>
            </div>
          </div>
        </section>
      </main>

      <JsonLd json={breadcrumbLd} />
      <JsonLd json={webpageLd} />
      <JsonLd json={itemListLd} />
    </>
  );
}
