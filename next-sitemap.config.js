// next-sitemap.config.js
module.exports = {
  siteUrl: "https://absar.sa",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: [],
  transform: async (config, url) => {
    return {
      loc: url,
      changefreq: "weekly",
      priority: url === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
