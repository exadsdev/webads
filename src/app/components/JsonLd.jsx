"use client";
// app/components/JsonLd.jsx
export default function JsonLd({ json }) {
  const safeJson = JSON.stringify(json);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJson }}
      suppressHydrationWarning
    />
  );
}
