import { SITE } from "../seo.config";
import Image from "next/image";
export const metadata = {
  title: "ติดต่อเรา | AdsDev Marketing",
  description: "ติดต่อทีมงานเพื่อเริ่มต้นวางแผนการตลาดและโฆษณา",
  alternates: { canonical: `${SITE}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <nav className="breadcrumb">หน้าแรก / ติดต่อเรา</nav>
      <h1>ติดต่อเรา</h1>
      <p>อีเมล: contact@myads.dev | เว็บไซต์: {SITE}</p>
      <p>กรุณาให้ข้อมูลธุรกิจและเป้าหมายคร่าว ๆ เพื่อการประเมินที่แม่นยำ</p>
       <a
                href="https://lin.ee/vjeDuCZ"
                aria-label="แชท LINE myads.dev"
                rel="noopener noreferrer"
                target="_blank"
                className="btn4"
              >
          @Line ติดต่อเรา
              </a>
    </>
  );
}
