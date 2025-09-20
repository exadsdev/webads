import JsonLd from "../components/JsonLd";
import { SITE } from "../seo.config";

export const metadata = {
  title: "คำถามที่พบบ่อย (FAQ) | บริการโฆษณาออนไลน์",
  description: "รวมคำตอบที่ลูกค้าถามบ่อยเกี่ยวกับบริการยิงแอด การวัดผล และการทำงานร่วมกัน",
  alternates: { canonical: `${SITE}/faq` },
};

export default function FaqPage() {
  const faqs = [
    { q: "เริ่มต้นใช้งานต้องเตรียมอะไรบ้าง?", a: "ลิงก์เว็บไซต์/เพจ ข้อมูลธุรกิจ เป้าหมาย และสื่อโฆษณาที่มี (หากไม่มี เราช่วยจัดทำได้)" },
    { q: "มีรายงานความคืบหน้าหรือไม่?", a: "มีรายงานสรุปพร้อมข้อเสนอแนะการปรับปรุงอย่างสม่ำเสมอ" },
    { q: "ระยะเวลาทดลอง/สัญญา?", a: "ทำงานเป็นรอบเดือน สามารถยืดหยุ่นตามงบประมาณ" },
  ];

  const faqLd = {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity": faqs.map(({q,a}) => ({
      "@type":"Question",
      "name": q,
      "acceptedAnswer": { "@type":"Answer", "text": a }
    }))
  };

  return (
    <>
      <nav className="breadcrumb">หน้าแรก / คำถามที่พบบ่อย</nav>
      <h1>คำถามที่พบบ่อย</h1>
      <div className="section">
        {faqs.map((f,i)=>(
          <details key={i} className="card">
            <summary><strong>{f.q}</strong></summary>
            <div style={{marginTop:8}}>{f.a}</div>
          </details>
        ))}
      </div>
      <JsonLd json={faqLd} />
    </>
  );
}
