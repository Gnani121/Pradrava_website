const BASE = "https://pradrava.com";

const routes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/products", priority: 0.9, changeFrequency: "monthly" },
  { path: "/products/fluids", priority: 1.0, changeFrequency: "weekly" },
  { path: "/products/fluids/cylinder-operations", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/fluids/quality", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/fluids/production", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/fluids/procurement", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/fluids/finance", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/fluids/notifications", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/fluids/platform", priority: 0.8, changeFrequency: "monthly" },
  { path: "/products/accounting", priority: 0.5, changeFrequency: "monthly" },
  { path: "/showcase", priority: 0.6, changeFrequency: "monthly" },
  { path: "/services", priority: 0.7, changeFrequency: "monthly" },
  { path: "/demo", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
