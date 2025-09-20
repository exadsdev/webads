"use client"; 
import { useState, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";
const Video = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/videos.json")
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Error loading videos:", error));
  }, []);

  return (
    <>
      
      <>
        <title>Video Tutorials - เรียนรู้วิธีการทำโฆษณา Google Ads สายเทาและอื่นๆ จากคลิปวีดีโอที่ครอบคลุมทุกด้าน สำหรับมือใหม่และผู้ที่ต้องการพัฒนาความรู้ด้านการตลาดออนไลน์</title>
        <meta name="description" content="เรียนรู้วิธีการทำโฆษณา Google Ads สายเทาและอื่นๆ จากคลิปวีดีโอที่ครอบคลุมทุกด้าน สำหรับมือใหม่และผู้ที่ต้องการพัฒนาความรู้ด้านการตลาดออนไลน์." />
        <meta name="keywords" content="ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google,รับยิงแอด,ads,รับทำโฆษณา,รับโฆษณา,Facebook,การตลาด,โฆษณาออนไลน์,เว็บไซต์,ตลาดเป้าหมาย,โฆษณาบนโซเชียลมีเดีย,Google Ads,การโฆษณาบน Facebook,การโฆษณาออนไลน์บนสื่อต่าง ๆ,การตลาดออนไลน์,การโปรโมท,โฆษณา Facebook,การโฆษณา Google,การโฆษณาสินค้า,การโฆษณาโปรโมชั่น,วิธีการโฆษณา,ความสำเร็จในการตลาด,บริการโฆษณา,การตลาดออนไลน์บน Facebook,การโฆษณาบนเว็บ,การวางแผนโฆษณา,รับจ้างโฆษณา,Google Ads, โฆษณาสายเทา, การตลาดออนไลน์, วีดีโอสอน, YouTube ads, เรียน Google Ads" />
        <meta property="og:title" content="เรียนรู้การทำโฆษณา Google Ads สายเทา" />
        <meta property="og:description" content="ติดตามวีดีโอสอนการทำโฆษณา Google Ads สายเทา ตั้งแต่พื้นฐานจนถึงขั้นสูง." />
        <meta property="og:image" content="https://www.myads.dev/img/ads.webp" />
        <meta property="og:url" content="https://www.myads.dev/videos" />
        <meta name="twitter:card" content="summary_large_image" />

        
        <Script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "รับยิงแอดโฆษณาสายเทา",
            "description": "เรียนรู้วิธีการทำโฆษณา Google Ads สายเทาและอื่นๆ จากคลิปวีดีโอที่ครอบคลุมทุกด้าน สำหรับมือใหม่และผู้ที่ต้องการพัฒนาความรู้ด้านการตลาดออนไลน์",
            "thumbnailUrl": "https://www.myads.dev/img/ads.webp",
            "uploadDate": "2025-08-18",
            "contentUrl": "/videos/Google_ads.mp4",
            "embedUrl": "/videos/Google_ads.mp4",
            "publisher": {
              "@type": "Organization",
              "name": "Your Website Name"
            }
          })}
        </Script>
      </>

      <div className="container mt-5">
        <div className="vdo">
          {videos.map((vdo) => (
            <div key={vdo.id} className="card mb-3">
              <h3 className="card-title">{vdo.title}</h3>

             
              <video width="100%" controls>
                <source src={`/videomp4/${vdo.vdomp4}`} type="video/mp4" />
              </video>

              

              <div className="card-body">
                
                <Link href={`/video/${vdo.name}`} className="h4">
                  {vdo.name}
                </Link>
                <p className="card-text">{vdo.description}</p>
                <strong>keywords</strong>
                <p className="keywords">
                ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google,รับยิงแอด,ads,รับทำโฆษณา,รับโฆษณา,Facebook,การตลาด,โฆษณาออนไลน์,เว็บไซต์,ตลาดเป้าหมาย,โฆษณาบนโซเชียลมีเดีย,Google Ads,การโฆษณาบน Facebook,การโฆษณาออนไลน์บนสื่อต่าง ๆ,การตลาดออนไลน์,การโปรโมท,โฆษณา Facebook,การโฆษณา Google,การโฆษณาสินค้า,การโฆษณาโปรโมชั่น,วิธีการโฆษณา,ความสำเร็จในการตลาด,บริการโฆษณา,การตลาดออนไลน์บน Facebook,การโฆษณาบนเว็บ,การวางแผนโฆษณา,รับจ้างโฆษณา
                </p>

              </div>

              <div className="d-flex justify-content-around">
                <p className="card-text"><small className="text-body-secondary">{vdo.Time}</small></p>
                <div className="text-center">
                  <Link href={`/video/${vdo.name}`} > ดูแบบเต็มจอ </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Video;
