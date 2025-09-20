"use client";

import { useEffect, useRef, useState } from "react";

export default function NewReviewPage() {
  const API_BASE = process.env.NEXT_PUBLIC_API_URLS || "https://apiposts.myad-dev.com/";

  // ===== Form state =====
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [times, setTimes] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });
  const formRef = useRef(null);

  // ===== List state =====
  const [items, setItems] = useState([]);
  const [loadingList, setLoadingList] = useState(false);

  // ===== Helpers =====
  const imgSrc = (imgPath) => {
    if (!imgPath) return "";
    // ถ้าเป็น URL เต็มแล้ว ให้ใช้เลย ไม่งั้น prefix ด้วย API_BASE
    if (/^https?:\/\//i.test(imgPath)) return imgPath;
    return `${API_BASE}${imgPath.startsWith("/") ? "" : "/"}${imgPath}`;
  };

  // ===== Load list =====
  const loadItems = async () => {
    try {
      setLoadingList(true);
      const res = await fetch(`${API_BASE}/get`, { cache: "no-store" });
      const data = await res.json();
      setItems(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  // ===== File change =====
  const onFileChange = (e) => {
    const f = e.target.files?.[0];
    if (!f) {
      setFile(null);
      setPreview(null);
      return;
    }
    const okTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!okTypes.includes(f.type)) {
      setAlert({ type: "danger", message: "ไฟล์ต้องเป็นรูปภาพ (jpg, png, webp, gif)" });
      e.target.value = "";
      return;
    }
    if (f.size > 5 * 1024 * 1024) {
      setAlert({ type: "danger", message: "ขนาดไฟล์ต้องไม่เกิน 5MB" });
      e.target.value = "";
      return;
    }
    setFile(f);
    setPreview(URL.createObjectURL(f));
  };

  // ===== Submit =====
  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlert({ type: "", message: "" });

    if (!title.trim()) {
      setAlert({ type: "warning", message: "กรุณากรอกหัวข้อ (title)" });
      return;
    }

    try {
      setLoading(true);
      const fd = new FormData();
      fd.append("title", title.trim());
      if (name.trim()) fd.append("name", name.trim());
      if (times.trim()) fd.append("times", times.trim());
      if (file) fd.append("img", file);

      const res = await fetch(`${API_BASE}/upload`, {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "อัปโหลดไม่สำเร็จ");

      setAlert({ type: "success", message: "เพิ่มข้อมูลสำเร็จ" });
      setTitle("");
      setName("");
      setTimes("");
      setFile(null);
      setPreview(null);
      formRef.current?.reset();
      await loadItems(); // โหลดรายการใหม่ด้านล่าง
    } catch (err) {
      setAlert({ type: "danger", message: err.message || "เกิดข้อผิดพลาด" });
    } finally {
      setLoading(false);
    }
  };

  // ===== Delete =====
  const handleDelete = async (id) => {
    const ok = window.confirm("ยืนยันการลบรายการนี้?");
    if (!ok) return;
    try {
      const res = await fetch(`${API_BASE}/delete/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "ลบไม่สำเร็จ");
      // ลบสำเร็จ: อัปเดตรายการแบบไม่ต้องรีเฟรชทั้งหมดก็ได้
      setItems((prev) => prev.filter((it) => it.id !== id));
    } catch (err) {
      setAlert({ type: "danger", message: err.message || "ลบไม่สำเร็จ" });
    }
  };

  return (
    <div className="container py-5">
      {/* Form Card */}
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h1 className="h4 mb-3">เพิ่มรีวิว</h1>

              {alert.message ? (
                <div className={`alert alert-${alert.type}`} role="alert">
                  {alert.message}
                </div>
              ) : null}

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">หัวข้อ (Title) *</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="เช่น รีวิวจากลูกค้า คุณเอ"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    list="name"
                  />
                </div>
                   <datalist id="name">
                    <option value="Facebook_Ads"/>
                    <option value="Google_Ads"/>
                    </datalist>
             
                  
                    
      


                <div className="mb-3">
                  <label className="form-label">ชื่อผู้รีวิว (Name)</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="เช่น คุณเอ"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

               

                <div className="mb-3">
                  <label className="form-label">อัปโหลดรูปภาพ (ไม่เกิน 5MB)</label>
                  <input type="file" accept="image/*" className="form-control" onChange={onFileChange} />
                </div>

                {preview ? (
                  <div className="mb-3">
                    <div className="text-muted small mb-2">ตัวอย่างรูปภาพที่กำลังจะอัปโหลด</div>
                    <img
                      src={preview}
                      alt="preview"
                      className="img-fluid rounded border"
                      style={{ maxHeight: 220, objectFit: "cover" }}
                    />
                  </div>
                ) : null}

                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "กำลังบันทึก..." : "บันทึกข้อมูล"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      setTitle("");
                      setName("");
                      setTimes("");
                      setFile(null);
                      setPreview(null);
                      setAlert({ type: "", message: "" });
                      formRef.current?.reset();
                    }}
                    disabled={loading}
                  >
                    ล้างฟอร์ม
                  </button>
                </div>
              </form>

              <hr className="my-4" />
              <div className="text-muted small">
                API: <code>{API_BASE}/upload</code> &middot; แสดงตัวอย่างรายการด้านล่าง
              </div>
            </div>
          </div>
        </div>
      </div>
                
      {/* Thumbnails List */}
      <div className="row mt-5">
        <div className="col-12">
          <h2 className="h5 mb-3">รายการล่าสุด</h2>

          {loadingList ? (
            <div className="text-muted">กำลังโหลดรายการ...</div>
          ) : items.length === 0 ? (
            <div className="text-muted">ยังไม่มีรายการ</div>
          ) : (
            <div className="row g-3">
              {items.map((it) => (
                <div className="col-6 col-md-4 col-lg-3" key={it.id}>
                  <div className="card h-100 shadow-sm border-0">
                    <div className="ratio ratio-1x1">
                      {it.img ? (
                        <img
                          src={imgSrc(it.img)}
                          alt={it.title || "review"}
                          className="card-img-top"
                          style={{ objectFit: "cover" }}
                        />
                      ) : (
                        <div
                          className="d-flex align-items-center justify-content-center bg-light"
                          style={{ fontSize: 12 }}
                        >
                          ไม่มีรูป
                        </div>
                      )}
                    </div>
                    <div className="card-body p-2">
                      <div className="fw-semibold text-truncate" title={it.title}>
                        {it.title || "-"}
                      </div>
                      <div className="text-muted small text-truncate" title={it.name}>
                        {it.name || "-"}
                      </div>
                      <div className="text-muted small">{it.times || ""}</div>
                    </div>
                    <div className="card-footer bg-white border-0 p-2">
                      <button
                        className="btn btn-sm btn-outline-danger w-100"
                        onClick={() => handleDelete(it.id)}
                      >
                        ลบ
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
