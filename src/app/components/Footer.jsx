import Link from "next/link";
import Image from "next/image";
import { BRAND, SITE, LOGO_URL } from "../seo.config";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND,
    url: SITE,
    logo: LOGO_URL || `${SITE}/images/logo.png`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "contact@myads.dev",
        areaServed: "TH",
        availableLanguage: ["th", "en"],
      },
    ],
    sameAs: [
      "https://lin.ee/OuyclyD",
      // เพิ่มช่องทางอื่นได้ เช่น YouTube/Telegram/Facebook
    ],
  };

  return (
    <footer className={`${styles.footer} mt-5`} aria-labelledby="site-footer">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
      />
      <div className="container py-5">
        <h2 id="site-footer" className="visually-hidden">
          ส่วนท้ายเว็บไซต์
        </h2>

        {/* Top CTA */}
        <div className={`${styles.cta} rounded-4 p-4 p-md-5 mb-5`}>
          <div className="row align-items-center g-3">
            <div className="col-lg-8">
              <div className="d-flex align-items-center gap-3">
                <img
                  src="/images/logo.png"
                  alt={BRAND}
                  width={48}
                  height={48}
                  className="rounded-2"
                />
                <div>
                  <h3 className="h5 mb-1">พร้อมเริ่มโฆษณาให้ธุรกิจของคุณหรือยัง?</h3>
                  <p className="mb-0 text-secondary">
                    คุยกลยุทธ์ กำหนด KPI และเริ่มต้นอย่างถูกต้องตั้งแต่วันแรก
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex gap-2 justify-content-lg-end">
              <Link href="/contact" className="btn3">
                ติดต่อเรา
              </Link>
              <Link href="/" className="btn3">
                ← กลับหน้าแรก
              </Link>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          {/* Brand + Social */}
          <div className="col">
            <div className="d-flex align-items-center gap-2 mb-3">
              <img
                src={LOGO_URL || "/images/logo.png"}
                alt={BRAND}
                width={36}
                height={36}
                className="rounded-2"
              />
              <strong className="fs-5">{BRAND}</strong>
            </div>
            <p className="text-secondary mb-3">
              ผู้เชี่ยวชาญด้านกลยุทธ์โฆษณาออนไลน์ เน้นผลลัพธ์ วัดผลได้จริง ครอบคลุม
              Google Ads / Facebook Ads / คอนเวอร์ชันและแทรกกิ้งครบถ้วน
            </p>

            <div className="d-flex gap-2">
              <a
                href="https://lin.ee/OuyclyD"
                target="_blank"
                rel="noopener nofollow"
                aria-label="LINE"
                className={styles.iconBtn}
              >
                {/* LINE */}
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M19.9 4.6C18.1 3 15.8 2.1 13.3 2 7.9 2 3.5 5.6 3.5 10c0 2.5 1.3 4.7 3.4 6.2v3.4c0 .3.3.5.5.5.1 0 .2 0 .2-.1l3.8-2c.6.1 1.3.1 1.9.1 5.4 0 9.8-3.6 9.8-8s-1.9-4.9-3.2-5.5z"
                  />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@myadsdev"
                target="_blank"
                rel="noopener nofollow"
                aria-label="YouTube"
                className={styles.iconBtn}
              >
                {/* YouTube */}
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.7 3.6 12 3.6 12 3.6s-7.7 0-9.4.5A3 3 0 0 0 .5 6.2 32 32 0 0 0 0 12a32 32 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.7.5 9.4.5 9.4.5s7.7 0 9.4-.5a3 3 0 0 0 2.1-2.1A32 32 0 0 0 24 12a32 32 0 0 0-.5-5.8zM9.6 15.5V8.5l6.2 3.5-6.2 3.5z"
                  />
                </svg>
              </a>
              <a
                href="https://t.me/AdsDev"
                target="_blank"
                rel="noopener nofollow"
                aria-label="Telegram"
                className={styles.iconBtn}
              >
                {/* Telegram */}
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M9.9 15.8 9.7 19c.4 0 .5-.2.7-.4l1.7-1.6 3.5 2.6c.6.3 1.1.1 1.2-.6l2.2-10c.2-.9-.3-1.3-1-1L4 11c-.9.3-.9.8-.2 1l4.3 1.3 7.9-5-6.1 7.5z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col">
            <h3 className="h6 text-uppercase text-secondary mb-3">บริการ</h3>
            <ul className={`${styles.linkList} list-unstyled`}>
              <li><Link href="/services">Services (ภาพรวม)</Link></li>
              <li><Link href="/services/google-ads">Google Ads</Link></li>
              <li><Link href="/services/facebook-ads">Facebook Ads</Link></li>
              <li><Link href="/course">คอร์สเรียนยิง Ads</Link></li>
              <li><Link href="/toolfree">เครื่องมือฟรี</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col">
            <h3 className="h6 text-uppercase text-secondary mb-3">ความรู้</h3>
            <ul className={`${styles.linkList} list-unstyled`}>
              <li><Link href="/posts">วิดีโอ / โพสต์</Link></li>
              <li><Link href="/faq">คำถามที่พบบ่อย (FAQ)</Link></li>
              <li><Link href="/privacy">นโยบายความเป็นส่วนตัว</Link></li>
              <li><Link href="/terms">ข้อตกลงการใช้บริการ</Link></li>
              <li><Link href="/sitemap.xml">Sitemap</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col">
            <h3 className="h6 text-uppercase text-secondary mb-3">ติดต่อ</h3>
            <ul className={`${styles.contactList} list-unstyled`}>
              <li>
                <strong>เว็บไซต์:</strong>{" "}
                <a href={SITE} className="text-decoration-none" rel="noopener">
                  {SITE}
                </a>
              </li>
              <li>
                <strong>อีเมล:</strong>{" "}
                <a href="mailto:contact@myads.dev" className="text-decoration-none">
                  contact@myads.dev
                </a>
              </li>
              <li><strong>ที่ตั้ง:</strong> Thailand</li>
              <li><strong>เวลาทำการ:</strong> จันทร์–ศุกร์ 09:00–18:00</li>
            </ul>

            <div className="d-flex gap-2">
              <Link href="/contact" className="btn btn-sm btn-outline-light">
                นัดคุยกับทีมงาน
              </Link>
            <a href="https://www.facebook.com/groups/myadsdev" className="btn btn-info"> Facebook Groups </a>
              <a
                href="https://lin.ee/OuyclyD"
                target="_blank"
                rel="noopener"
                className="btn btn-sm btn-success"
              >
                แอด LINE
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={`${styles.bottom} py-3`}>
        <div className="container d-flex flex-column flex-lg-row gap-2 justify-content-between align-items-center">
          <div className="small text-secondary">
            &copy; {year} {BRAND}. สงวนลิขสิทธิ์.
          </div>
          <nav aria-label="ลิงก์กฎหมาย">
            <ul className={`${styles.bottomLinks} list-unstyled d-flex gap-3 mb-0`}>
              <li><Link href="/privacy">นโยบายความเป็นส่วนตัว</Link></li>
              <li><Link href="/terms">ข้อตกลงการใช้บริการ</Link></li>
              <li><a href="#top">↑ กลับขึ้นด้านบน</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
