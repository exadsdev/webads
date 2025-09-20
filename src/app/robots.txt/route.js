import { SITE } from "../seo.config";

export async function GET() {
  const body = `
User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
Host: ${SITE.replace("https://","")}
`.trim();
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}
