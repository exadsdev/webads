"use client";

import { useEffect, useState, useCallback } from "react";

export default function ClientLightboxGrid({ reviews, apiBase }) {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const resolveImg = useCallback((src) => {
    if (!src) return "";
    if (/^https?:\/\//i.test(src)) return src;
    return `${apiBase}${src.startsWith("/") ? "" : "/"}${src}`;
  }, [apiBase]);

  // ปิดด้วยปุ่ม ESC และล็อก scroll
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setLightboxSrc(null); };
    if (lightboxSrc) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxSrc]);

  return (
    <>
      <section aria-label="รายการรีวิวลูกค้า">
        {(!reviews || reviews.length === 0) ? (
          <div className="alert alert-light border text-center">ยังไม่มีรีวิวให้แสดงในขณะนี้</div>
        ) : (
          <div className="row reviews-grid">
            {reviews.map((r) => (
              <div className="col-6 col-md-4 col-lg-3" key={r.id} id={`review-${r.id}`}>
                <article
                  className="card review-card"
                  onClick={() => r?.img && setLightboxSrc(resolveImg(r.img))}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter") r?.img && setLightboxSrc(resolveImg(r.img)); }}
                  aria-label={`เปิดดูรูปภาพของ ${r.title || r.name || "รีวิวลูกค้า"}`}
                >
                  <div className="review-thumb">
                    {r.img ? (
                      <img
                        src={resolveImg(r.img)}
                        alt={r.title || r.name || "รีวิวลูกค้า"}
                        loading="lazy"
                        className="review-img"
                      />
                    ) : (
                      <div className="w-100 h-100 d-flex align-items-center justify-content-center no-image">
                        ไม่มีรูปภาพ
                      </div>
                    )}
                  </div>
                  <div className="card-body">
                    <h2 className="h6 mb-1 clamp-title" title={r.title || ""}>
                      {r.title || "–"}
                    </h2>
                    <div className="review-meta clamp-text">{r.name || "ลูกค้าไม่ระบุชื่อ"}</div>
                    {r.times ? <div className="review-meta mt-1">{r.times}</div> : null}
                  </div>
                </article>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="review-lightbox-backdrop"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={lightboxSrc}
            alt="ภาพขนาดใหญ่"
            className="review-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
