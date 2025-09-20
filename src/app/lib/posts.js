// Simple in-memory posts store (replace with your real data/API later)
export const SITE = "https://www.myad-dev.com"; // ⬅️ เปลี่ยนเป็นโดเมนจริงของคุณ
export const BRAND = "myad-dev.com";            // ⬅️ เปลี่ยนเป็นชื่อแบรนด์จริงของคุณ

export const posts = [
  {
    slug: "google-ads-grey-tactics-checklist",
    title: "เช็คลิสต์ทำ Google Ads สายเทาแบบปลอดภัย (อัปเดต 2025)",
    description:
      "แนวทางวางโครงสร้างแคมเปญ คำค้น การตั้งค่า Conversion และการวัดผล สำหรับธุรกิจสายเทาให้ยิงแอดได้อย่างยั่งยืน",
    cover: "/images/posts/google-ads-grey-checklist.webp",
    date: "2025-09-10",
    author: "ทีมงาน " + BRAND,
    tags: ["Google Ads", "สายเทา", "Conversion"],
    readingMinutes: 6,
    body: `
<h2>สรุปสั้น</h2>
<p>จัดโครงสร้าง Search/PMAX ให้ชัดเจน, ตั้งค่า Conversion ครบ, ใช้ Negative Keywords เป็น, และวัดผลด้วย CAPI/GA4</p>
<ul>
  <li>Research คำค้น: Intent เชิงพาณิชย์</li>
  <li>โครงสร้าง: Campaign → Ad group → Keyword ชัดเจน</li>
  <li>Conversion: ซื้อ/แชท/โทร ติดครบ</li>
  <li>วัดผล: GA4 + Consent mode v2</li>
</ul>
`,
  },
  {
    slug: "facebook-ads-grey-capi-playbook",
    title: "Facebook Ads สายเทา: CAPI Playbook สำหรับปี 2025",
    description:
      "ตั้งค่า Conversion API, โครงสร้างแคมเปญแบ่งตาม Funnel, และการทดสอบครีเอทีฟเพื่อผลลัพธ์ที่วัดได้",
    cover: "/images/posts/facebook-ads-capi.webp",
    date: "2025-09-05",
    author: "ทีมงาน " + BRAND,
    tags: ["Facebook Ads", "CAPI", "สายเทา"],
    readingMinutes: 7,
    body: `
<h2>แนวทาง</h2>
<p>ตั้งค่า CAPI ผ่าน GTM/Server, แบ่ง Funnel (TOFU/MOFU/BOFU), และใช้ UGC/Short-form วิดีโอ</p>
<ol>
  <li>CAPI: ตรวจเช็ค event match quality</li>
  <li>Creative: 3-5 แนวทาง/รอบทดสอบ</li>
  <li>รายงานผล: สรุปสั้น + Insight ปรับรอบถัดไป</li>
</ol>
`,
  },
];

export const postMap = Object.fromEntries(posts.map((p) => [p.slug, p]));

export function listPosts({ page = 1, pageSize = 10 } = {}) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const total = posts.length;
  return {
    items: posts.slice(start, end),
    page,
    pageSize,
    total,
    totalPages: Math.max(1, Math.ceil(total / pageSize)),
  };
}
