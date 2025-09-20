// วิดีโอโพสต์แบบ local ไม่พึ่ง API ภายนอก
// ใช้ YouTube (youtube-nocookie) สำหรับฝังวิดีโอ
// แก้ไขค่า SITE, BRAND ใน ../seo.config ให้ถูกต้อง

import { SITE, BRAND } from "../seo.config";

export const videos = [
  {
    slug: "google-ads-grey-setup-2025",
    title: "โฆษณาGoogleAdsสายเทาขึ้นหน้าเทาภายในเวลา2-3ชั่วโมง",
    description:
      "โฆษณาGoogleAdsสายเทาขึ้นหน้าเทาภายในเวลา2-3ชั่วโมง สำหรับมือใหม่ ควรต้องดู",
    youtubeId: "GgzFZSj0VDs", 
    date: "2025-09-10",
    author: `ทีมงาน ${BRAND}`,
    tags: ["Google Ads", "สายเทา", "Conversion"],
    durationISO: "PT6M30S", 
  },
  {
    slug: "facebook-ads-grey-capi-setup",
    title: "ยิงแอดโฆษณา Facebook conversion รูปภาพ + วีดีโอ สายเทา 2025 สำหรับมือใหม่ ควรต้องดู",
    description:
      "คลิปวีดีโอสอนยิงแอดโฆษณา Facebook conversion แบบจัดเต็มตั้งแต่เริ่มทำ sale Page Landing Page",
    youtubeId: "UlCc4FTW6HE", 
    date: "2025-09-05",
    author: `ทีมงาน ${BRAND}`,
    tags: ["Facebook Ads", "CAPI", "สายเทา"],
    durationISO: "PT7M15S",
  },
  {
    slug: "facebook-ads-conversion",
    title: "วีดีโอรีวิวผลลัพธ์ Facebook Ads conversion สายเทา 2025",
    description:
      "ครับผมเป็นการรีวิวผลลัพธ์นะครับแต่การเทสยิงโฆษณาบน Facebook conversion สายเทาไปดูกันว่ามีผลลัพธ์ดีมากน้อยแค่ไหนครับผม ยิงเข้า sale Page แล้วส่งจากเซลล์ไปเข้าหน้าสมัครเลยเป็นลิงค์สมัครแนะนำเพื่อนให้ได้เห็นเลยว่ามีคนสมัครกี่คนกันแน่",
    youtubeId: "5rR1u_m8d-c", 
    date: "2025-09-05",
    author: `ทีมงาน ${BRAND}`,
    tags: ["Facebook Ads", "CAPI", "สายเทา"],
    durationISO: "PT7M15S",
  },
  {
    slug: "facebook-ads-conversion2025",
    title: "สอนทำ sale Page นำไปใช้ยิงแอด conversion บน Facebook 2025 สำหรับสายเทาฟรี",
    description:
      "แต่ก็ยังดียังพอได้สามารถดาวน์โหลด template ได้ฟรีนำไป hosting เอาเองได้เลยส่วนวิธีการนั้นอยู่ในคลิปทั้งหมดแล้วหากไม่เข้าใจก็ทักไลน์เข้ามาติดต่อสอบถามผมได้ครับยินดีให้คำปรึกษาตลอด",
    youtubeId: "1BgxFdJzQDw?si=siB6IcBv21ShznxG", 
    date: "2025-09-05",
    author: `ทีมงาน ${BRAND}`,
    tags: ["Facebook Ads", "CAPI", "สายเทา"],
    durationISO: "PT7M15S",
  },

];

export const videoMap = Object.fromEntries(videos.map((v) => [v.slug, v]));

export function listVideos({ page = 1, pageSize = 12, tag = "", q = "" } = {}) {
  let items = videos.slice();

  if (tag) {
    const t = tag.toLowerCase();
    items = items.filter((v) => (v.tags || []).some((x) => x.toLowerCase() === t));
  }
  if (q) {
    const qq = q.toLowerCase();
    items = items.filter(
      (v) =>
        v.title.toLowerCase().includes(qq) ||
        v.description.toLowerCase().includes(qq)
    );
  }

  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  return {
    items: items.slice(start, end).map((v) => ({
      ...v,
      watchUrl: `https://www.youtube.com/watch?v=${v.youtubeId}`,
      embedUrl: `https://www.youtube-nocookie.com/embed/${v.youtubeId}`,
      thumbnailUrl: `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`,
      url: `${SITE}/posts/${v.slug}`,
    })),
    page,
    pageSize,
    total,
    totalPages,
  };
}
