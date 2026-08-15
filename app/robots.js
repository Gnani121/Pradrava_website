export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/demo/"],
      },
    ],
    sitemap: "https://pradrava.com/sitemap.xml",
  };
}
