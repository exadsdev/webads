import { SITE } from "../seo.config";
export const metadata = {
  title: "นโยบายความเป็นส่วนตัว | AdsDev Marketing",
  alternates: { canonical: `${SITE}/privacy` },
};
export default function PrivacyPage() {
  return (
    <>
      <nav className="breadcrumb">หน้าแรก / นโยบายความเป็นส่วนตัว</nav>
      <h1>นโยบายความเป็นส่วนตัว</h1>
      <p>เราดูแลข้อมูลของคุณอย่างเคร่งครัดและใช้เพื่อการให้บริการเท่านั้น</p>
    </>
  );
}
