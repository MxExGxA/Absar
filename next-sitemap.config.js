const siteUrl = "https://absar.sa";

const staticUrls = [
  {
    loc: `https://absar.sa/blog`,
    changefreq: "weekly",
    priority: 0.8,
    lastmod: new Date().toISOString(),
  },
];

const excludeUrls = [
  "/sitemap.xml",
  "/robots.txt",
  "/icon1.png",
  "/icon0.svg",
  "/apple-icon.png",
  "/manifest.json",
];

async function fetchBlogUrls() {
  try {
    const res = await fetch(`https://admin.absar.sa/api/article`, {
      next: { revalidate: 60 }, // cache for 1 minute
    });

    const data = await res.json();
    const blogs = data?.data || [];

    return blogs.map(
      (article) =>
        `${siteUrl}/blog/${article.title.replaceAll(" ", "-")}`
    );
  } catch (error) {
    console.error("Failed to fetch blog URLs from Strapi:", error);
    return [];
  }
}

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: excludeUrls,

  // Dynamically transform all URLs
  transform: async (config, url) => {
    return {
      loc: url,
      changefreq: "weekly",
      priority: url === `${siteUrl}/` ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },

  additionalPaths: async (config) => {
    const blogUrls = await fetchBlogUrls();

    return [
      ...staticUrls,
      ...blogUrls.map((url) => ({
        loc: url,
        changefreq: "weekly",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      })),
    ];
  },
};
