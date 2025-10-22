"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SITE } from "@/app/seo.config";

const site = process.env.NEXT_PUBLIC_SITE_URL || SITE;

export default function ToolfreeClient() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [downloadType, setDownloadType] = useState(null);

  const openModal = (type) => {
    setDownloadType(type);
    setTimeLeft(30);
    setModalIsOpen(true);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setDownloadType(null);
    document.body.classList.remove("modal-open");
  };

  useEffect(() => {
    if (!modalIsOpen) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [modalIsOpen]);

  useEffect(() => {
    if (timeLeft !== 0 || !downloadType) return;

    const url =
      downloadType === "facebook"
        ? "https://apipost.myad-dev.com/facebook.zip"
        : "https://apipost.myad-dev.com/google.zip";

    const a = document.createElement("a");
    a.href = url;
    a.download = "";
    document.body.appendChild(a);
    a.click();
    a.remove();

    closeModal();
  }, [timeLeft, downloadType]);

  return (
    <>
      {/* Facebook Download */}
      <section className="text-center">
        <h3 className="h5 mb-3">ดาวน์โหลด Landing Page Facebook</h3>
        <div className="d-flex justify-content-center">
          <Image
            src="/images/fbd.webp"
            width={650}
            height={360}
            alt="ตัวอย่าง Landing Page สำหรับ Facebook"
            className="imgfb img-fluid rounded shadow-sm mx-auto d-block"
            priority
          />
        </div>
        <div className="mt-3">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => openModal("facebook")}
            aria-label="ดาวน์โหลดไฟล์ Facebook"
          >
            <Image
              src="/images/dl.png"
              width={24}
              height={24}
              alt=""
              style={{ marginRight: 8 }}
            />
            ดาวน์โหลด Facebook
          </button>
        </div>
      </section>

      <hr className="my-5" />

      {/* Google Download */}
      <section className="text-center">
        <h3 className="h5 mb-3">ดาวน์โหลด Landing Page Google</h3>
        <div className="d-flex justify-content-center">
          <Image
            src="/images/ld.jpg"
            width={650}
            height={360}
            alt="ตัวอย่าง Landing Page สำหรับ Google"
            className="imggg img-fluid rounded shadow-sm mx-auto d-block"
          />
        </div>
        <div className="mt-3">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => openModal("google")}
            aria-label="ดาวน์โหลดไฟล์ Google"
          >
            <Image
              src="/images/dl.png"
              width={24}
              height={24}
              alt=""
              style={{ marginRight: 8 }}
            />
            ดาวน์โหลด Google
          </button>
        </div>
      </section>

      {/* Countdown Modal */}
      {modalIsOpen && (
        <div
          className="modal fade show"
          role="dialog"
          aria-modal="true"
          aria-labelledby="downloadModalTitle"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 id="downloadModalTitle" className="modal-title">
                  กำลังเตรียมไฟล์ดาวน์โหลด...
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="ปิดหน้าต่าง"
                  onClick={closeModal}
                />
              </div>
              <div className="modal-body text-center">
                <h2 className="display-6">โปรดรอ {timeLeft} วินาที</h2>
                <p className="text-muted mb-0">
                  ระบบจะเริ่มดาวน์โหลดไฟล์โดยอัตโนมัติ
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
