import { seoConfig } from "../config/seoConfig";

export const homeJsonLd = () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: seoConfig.siteName,
    image: `${seoConfig.siteUrl}${seoConfig.defaultImage}`,
    url: seoConfig.siteUrl,
    priceRange: "$$",
    address: {
    "@type": "PostalAddress",
    addressLocality: "[City]",
    addressCountry: "[Country]",
    },
});

