import { Helmet } from "react-helmet-async";
import { seoConfig } from "../../config/seoConfig";

const HelmetSeo = ({
    title,
    description = seoConfig.defaultDescription,
    path = "",
    image = seoConfig.defaultImage,
    type = "website",
    noindex = false,
    twitterCreator,      
    jsonLd,
}) => {
const siteUrl = seoConfig.siteUrl; 

const fullTitle = title
    ? `${title} | ${seoConfig.siteName}`
    : seoConfig.defaultTitle;

const fullUrl = `${siteUrl}${path}`;
const fullImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

return (
    <Helmet htmlAttributes={{ lang: seoConfig.lang }}>
    <title>{fullTitle}</title>
    <meta name="description" content={description} />
    <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
    />
    {!noindex && <link rel="canonical" href={fullUrl} />}
    <meta name="theme-color" content={seoConfig.themeColor} />

      {/* // * OPEN GRAPH */}
    <meta property="og:type" content={type} />
    <meta property="og:site_name" content={seoConfig.siteName} />
    <meta property="og:title" content={fullTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={fullUrl} />
    <meta property="og:image" content={fullImage} />
    <meta property="og:image:width" content={seoConfig.ogImageWidth} />
    <meta property="og:image:height" content={seoConfig.ogImageHeight} />
    <meta property="og:locale" content={seoConfig.locale} />
    {/* // * TWITTER CARD */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={seoConfig.twitterHandle} />
    {twitterCreator && (
    <meta name="twitter:creator" content={twitterCreator} />
    )}
    <meta name="twitter:title" content={fullTitle} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={fullImage} />
    {/* // * STRUCTURED DATA */}
    {!noindex && jsonLd && (
        <script type="application/ld+json">
            {JSON.stringify(jsonLd)}
        </script>
    )}
    </Helmet>
);
};

export default HelmetSeo;