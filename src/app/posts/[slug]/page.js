import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE, BRAND } from "../../seo.config";
import { videos, videoMap } from "../../lib/videos";

export const dynamic = "force-static";

export function generateStaticParams() {
  return videos.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const v = videoMap[slug];
  if (!v) return { title: "ไม่พบวิดีโอ | " + BRAND };
  const url = `${SITE}/posts/${v.slug}`;
  const embed = `https://www.youtube-nocookie.com/embed/${v.youtubeId}`;

  return {
    metadataBase: new URL(SITE),
    title: `${v.title} | ${BRAND}`,
    description: v.description,
    alternates: { canonical: url },
    openGraph: {
      type: "video.other",
      url,
      siteName: BRAND,
      title: `${v.title} | ${BRAND}`,
      description: v.description,
      videos: [{ url: embed }],
    },
    twitter: {
      card: "player",
      title: `${v.title} | ${BRAND}`,
      description: v.description,
    },
  };
}

export default function PostVideoPage({ params }) {
  const v = videoMap[params.slug];
  if (!v) return notFound();

  const url = `${SITE}/posts/${v.slug}`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${v.youtubeId}`;
  const thumbnailUrl = `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "หน้าแรก", item: SITE },
      { "@type": "ListItem", position: 2, name: "วิดีโอ", item: `${SITE}/posts` },
      { "@type": "ListItem", position: 3, name: v.title, item: url },
    ],
  };

  const videoLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: v.title,
    description: v.description,
    embedUrl: embedUrl,
    uploadDate: v.date,
    thumbnailUrl: thumbnailUrl, // จำเป็นต่อการให้ Google แสดงวิดีโอในผลค้นหา
    duration: v.durationISO,
    publisher: {
      "@type": "Organization",
      name: BRAND,
      logo: { "@type": "ImageObject", url: `${SITE}/images/logo.png` },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd) }} />

      <article className="container py-4">
        <header className="mb-4">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">หน้าแรก</Link></li>
              <li className="breadcrumb-item"><Link href="/posts">วิดีโอ</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{v.title}</li>
            </ol>
          </nav>
          <h1 className="mb-2">{v.title}</h1>
          <p className="text-muted small mb-0">
            เผยแพร่ {new Date(v.date).toLocaleDateString("th-TH")}
          </p>
        </header>

        <div className="ratio ratio-16x9 mb-4">
          <iframe
            src={`${embedUrl}?rel=0`}
            title={v.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <p className="lead">{v.description}</p>

        <hr className="my-5" />

        <footer className="d-flex flex-wrap gap-2 align-items-center">
          <strong className="me-2">แท็ก:</strong>
          {(v.tags || []).map((t) => (
            <Link key={t} href={`/posts?tag=${encodeURIComponent(t)}`} className="badge text-bg-light text-decoration-none">
              {t}
            </Link>
          ))}
          <div className="ms-auto d-flex gap-2">
            <Link href="/" className="btn btn-outline-secondary btn-sm">← กลับหน้าแรก</Link>
            <Link href="/posts" className="btn btn-outline-primary btn-sm">← กลับไปวิดีโอ</Link>
          </div>
        </footer>
      </article>
    </>
  );
}
