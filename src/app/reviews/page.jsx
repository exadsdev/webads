import JsonLd from "../components/JsonLd";
import "./reviews.css";
import ClientLightboxGrid from "./ClientLightboxGrid";
import Link from "next/link";
const API_BASE = process.env.NEXT_PUBLIC_API_URLS || "https://apiposts.myad-dev.com";
const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://myad-dev.com";
const PAGE_PATH = "/reviews";
const BRAND = process.env.NEXT_PUBLIC_BRAND || "รีวิวลูกค้าจริง";

export const dynamic = "force-static";
export const revalidate = 300;

export const metadata = {
  metadataBase: new URL(SITE),
  title: `รีวิวผลงานจากลูกค้าจริง | ${BRAND}`,
  description:
    "รวมรีวิวผลงานจากลูกค้าจริง แสดงภาพผลงาน ข้อความสั้น ๆ และเวลางาน เสริมความน่าเชื่อถือและรองรับ SEO เต็มรูปแบบ",
  alternates: { canonical: `${SITE}${PAGE_PATH}` },
  openGraph: {
    type: "website",
    url: `${SITE}${PAGE_PATH}`,
    siteName: BRAND,
    title: `รีวิวผลงานจากลูกค้าจริง | ${BRAND}`,
    description:
      "รวมรีวิวผลงานจากลูกค้าจริง แสดงภาพผลงาน ข้อความสั้น ๆ และเวลางาน",
    locale: "th_TH",
    images: [
      { url: `${SITE}/og-reviews.jpg`, width: 1200, height: 630, alt: "รีวิวผลงานจากลูกค้าจริง" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `รีวิวผลงานจากลูกค้าจริง | ${BRAND}`,
    description:
      "รวมรีวิวผลงานจากลูกค้าจริง แสดงภาพผลงาน ข้อความสั้น ๆ และเวลางาน",
    images: [`${SITE}/og-reviews.jpg`],
  },
};

// ✅ ฟังก์ชันดึงข้อมูล (ต้องประกาศก่อนใช้)
async function getReviews() {
  try {
    const res = await fetch(`${API_BASE}/get`, { next: { revalidate } });
    if (!res.ok) throw new Error("Fail to fetch");
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

// ✅ ฟังก์ชันสร้าง JSON-LD
function buildJsonLd(reviews) {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: reviews.map((r, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${SITE}${PAGE_PATH}#review-${r.id}`,
      name: r.title || r.name || `รีวิวที่ ${r.id}`,
    })),
  };
  const reviewsSchema = reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${SITE}${PAGE_PATH}#review-${r.id}`,
    name: r.title || "รีวิวลูกค้า",
    reviewBody: r.title || "",
    datePublished: r.times || undefined,
    author: r.name ? { "@type": "Person", name: r.name } : { "@type": "Organization", name: BRAND },
    image: r.img
      ? r.img.startsWith("http")
        ? r.img
        : `${SITE}${r.img.startsWith("/") ? "" : "/"}${r.img}`
      : undefined,
    publisher: { "@type": "Organization", name: BRAND },
  }));
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "หน้าแรก", item: SITE },
      { "@type": "ListItem", position: 2, name: "รีวิวลูกค้าจริง", item: `${SITE}${PAGE_PATH}` },
    ],
  };
  return [itemList, ...reviewsSchema, breadcrumb];
}

export default async function ReviewsPage() {
  // ✅ ตอนนี้จะไม่ error แล้ว
  const reviews = await getReviews();
  const jsonLd = buildJsonLd(reviews);

  return (
    <main className="container py-5">
      <section className="text-center mb-4">
        <h1 className="display-6 fw-bold">รีวิวผลงานจากลูกค้าจริง</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: 760 }}>
          รวมผลงานและคำชมจากลูกค้าของเรา ภาพประกอบขนาดพอดีตา เน้นโหลดไวและสวยงาม
          ช่วยเพิ่มความน่าเชื่อถือ พร้อมโครงสร้างข้อมูลสำหรับ SEO
        </p>
      </section>

      {/* ใช้ Client Component สำหรับ Lightbox */}
      <ClientLightboxGrid reviews={reviews} apiBase={API_BASE} />

      <section className="mt-5">
        <div className="card reviews-cta">
          <div className="card-body p-4 p-md-5">
            <h2 className="h5 fw-bold mb-2">ต้องการดูผลงานเพิ่มเติม?</h2>
            <p className="text-muted mb-3">
              เรามีกรณีศึกษาหลากหลายอุตสาหกรรม ติดต่อเราเพื่อรับตัวอย่างที่ใกล้เคียงธุรกิจของคุณ
            </p>
            <Link href="/contact" className="btn3">ติดต่อทีมงาน</Link>
          </div>
        </div>
      </section>

      <JsonLd data={jsonLd} />
    </main>
  );
}
