import Link from "next/link";
import { SITE, BRAND } from "../seo.config";
import { listVideos } from "../lib/videos";

export const dynamic = "force-static";

export const metadata = {
  metadataBase: new URL(SITE),
  title: `วิดีโอ / โพสต์ | ${BRAND}`,
  description: `${BRAND} คลังวิดีโอความรู้ด้านการทำโฆษณาออนไลน์สายเทา (Google/Facebook Ads) พร้อมแนวทางตั้งค่า Conversion และการวัดผล`,
  alternates: { canonical: `${SITE}/posts` },
  openGraph: {
    type: "website",
    url: `${SITE}/posts`,
    siteName: BRAND,
    title: `วิดีโอ / โพสต์ | ${BRAND}`,
    description: `${BRAND} คลังวิดีโอความรู้ด้านโฆษณาออนไลน์สายเทา`,
  },
  twitter: {
    card: "summary",
    title: `วิดีโอ / โพสต์ | ${BRAND}`,
    description: `${BRAND} คลังวิดีโอความรู้ด้านโฆษณาออนไลน์สายเทา`,
  },
};

export default function PostsIndex({ searchParams }) {
  const page = Number(searchParams?.page || 1);
  const tag = String(searchParams?.tag || "");
  const q = String(searchParams?.q || "");
  const { items, totalPages } = listVideos({ page, pageSize: 12, tag, q });

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "หน้าแรก", item: SITE },
      { "@type": "ListItem", position: 2, name: "วิดีโอ", item: `${SITE}/posts` },
    ],
  };

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListOrder: "http://schema.org/ItemListOrderAscending",
    numberOfItems: items.length,
    itemListElement: items.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: v.url,
      item: {
        "@type": "VideoObject",
        name: v.title,
        description: v.description,
        thumbnailUrl: v.thumbnailUrl, // จำเป็นต่อ Video rich result
        uploadDate: v.date,
        duration: v.durationISO,
        embedUrl: v.embedUrl,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }} />

      <header className="container py-4">
        <Link href="/" className="btn btn-outline-secondary mb-3">← กลับหน้าแรก</Link>
        <h1 className="mb-2">วิดีโอ / โพสต์</h1>
        <p className="text-muted">
          รวมวิดีโอสอนและตัวอย่างการทำโฆษณาออนไลน์สายเทา ทั้ง Google Ads และ Facebook Ads
        </p>
        {(tag || q) && (
          <p className="small text-muted">
            {tag && <>แท็ก: <strong>{tag}</strong>{' '}</>}
            {q && <>ค้นหา: <strong>{q}</strong></>}
          </p>
        )}
      </header>

      <main className="container pb-5">
        {!items.length ? (
          <p>ยังไม่มีวิดีโอ</p>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
            {items.map((v) => (
              <div className="col" key={v.slug}>
                <article className="card h-100 border-0 shadow-sm">
                  <div className="ratio ratio-16x9">
                    <iframe
                      src={`${v.embedUrl}?rel=0`}
                      title={v.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>
                  <div className="card-body">
                    <h2 className="h5">
                      <Link href={`/posts/${v.slug}`}>{v.title}</Link>
                    </h2>
                    <p className="text-muted small mb-2">
                      เผยแพร่ {new Date(v.date).toLocaleDateString("th-TH")}
                    </p>
                    <p className="mb-0">{v.description}</p>
                  </div>
                  <div className="card-footer bg-white border-0 pt-0 d-flex flex-wrap gap-2">
                    {(v.tags || []).map((t) => (
                      <Link key={t} href={`/posts?tag=${encodeURIComponent(t)}`} className="badge text-bg-light text-decoration-none">
                        {t}
                      </Link>
                    ))}
                    <Link href={`/posts/${v.slug}`} className="btn btn-outline-primary w-100 mt-2">ดูรายละเอียด</Link>
                  </div>
                </article>
              </div>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <nav className="mt-4" aria-label="หน้าเพจวิดีโอ">
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link" href={`/posts?page=${Math.max(1, page - 1)}${tag ? `&tag=${encodeURIComponent(tag)}` : ""}${q ? `&q=${encodeURIComponent(q)}` : ""}`} aria-label="ก่อนหน้า">«</Link>
              </li>
              {Array.from({ length: totalPages }).map((_, i) => {
                const n = i + 1;
                const href = `/posts?page=${n}${tag ? `&tag=${encodeURIComponent(tag)}` : ""}${q ? `&q=${encodeURIComponent(q)}` : ""}`;
                return (
                  <li className={`page-item ${n === page ? "active" : ""}`} key={n}>
                    <Link className="page-link" href={href}>{n}</Link>
                  </li>
                );
              })}
              <li className="page-item">
                <Link className="page-link" href={`/posts?page=${Math.min(totalPages, page + 1)}${tag ? `&tag=${encodeURIComponent(tag)}` : ""}${q ? `&q=${encodeURIComponent(q)}` : ""}`} aria-label="ถัดไป">»</Link>
              </li>
            </ul>
          </nav>
        )}
      </main>
    </>
  );
}
