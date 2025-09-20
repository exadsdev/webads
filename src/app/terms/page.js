import { SITE } from "../seo.config";
export const metadata = {
  title: "ข้อตกลงการใช้บริการ | AdsDev Marketing",
  alternates: { canonical: `${SITE}/terms` },
};
export default function TermsPage() {
  return (
    <>
      <nav className="breadcrumb">หน้าแรก / ข้อตกลงการใช้บริการ</nav>
      <h1>ข้อตกลงการใช้บริการ</h1>
      <p>โปรดอ่านเงื่อนไขการให้บริการและความรับผิดชอบร่วมกันก่อนเริ่มงาน</p>
    </>
  );
}
