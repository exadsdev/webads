'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Script from 'next/script';

const VideoDetailPage = () => {
  const { name } = useParams();  // รับค่า name จาก URL
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (!name) {
      console.error('No name parameter in the URL');
      return;  // ถ้า name ไม่มีค่า ไม่ให้ทำงาน
    }

    // โหลดข้อมูลจากไฟล์ JSON
    fetch('/videos.json')
      .then((response) => response.json())
      .then((data) => {
        // ตรวจสอบว่าค่าของ name มีค่าแล้วค่อยใช้ toLowerCase()
        const videoData = data.find((video) => video.name && video.name.toLowerCase() === name.toLowerCase());
        setVideo(videoData);
      })
      .catch((error) => console.error('Error loading video:', error));
  }, [name]);

  if (!video) {
    return (
      <div className="container mt-5">
        <p>Video not found.</p>
      </div>
    );
  }

  return (
    <>
      <>
        <title>{video.title}</title>
        <meta name="title" content={video.title} />
        <meta name="description" content={video.description} />
        <meta name="keywords" content="Google Ads, โฆษณาสายเทา, การตลาดออนไลน์, วีดีโอสอน, YouTube ads" />
        <meta property="og:title" content={video.title} />
        <meta property="og:description" content={video.description} />
        <meta property="og:image" content={video.thumbnail} />
        <meta property="og:url" content={`https://yourwebsite.com/video/${video.name}`} />
        <meta name="twitter:card" content="summary_large_image" />

        <Script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": video.title,
            "description": video.description,
            "thumbnailUrl": video.thumbnail,
            "uploadDate": video.Time,
            "contentUrl": video.vdomp4,
            "embedUrl": video.vdomp4,
            "publisher": {
              "@type": "Organization",
              "name": "Your Website Name"
            }
          })}
        </Script>
      </>

      <div className="container mt-5 mb-5">
        <h1>{video.title}</h1>
        <div className="video">
          <video width="100%" controls>
            <source src={`/videomp4/${video.vdomp4}`} type="video/mp4" />
          </video>
        </div>
        <p><strong>Name:</strong> {video.name}</p>
        <p><strong>Description:</strong> {video.description}</p>
        <p><strong>Time:</strong> {video.Time}</p>
        
        <a href="/video" className="btn btn-info">Go Back to Videos</a>
      </div>
    </>
  );
};

export default VideoDetailPage;
