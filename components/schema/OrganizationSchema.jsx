const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.daikimedia.com/#organization",
    "name": "Daiki Media",
    "url": "https://www.daikimedia.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.daikimedia.com/logo-dark-version.png",
      "width": 200,
      "height": 60
    },
    "description": "Daiki Media provides expert SEO, digital marketing, and web development services, specializing in iGaming, eCommerce, and local SEO. Trusted by thousands of businesses across 50+ countries with a 93% client satisfaction rate.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+601114850067",
      "contactType": "Customer Service",
      "email": "lukesh@daikimedia.com",
      "areaServed": ["MY", "US"],
      "availableLanguage": ["English"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jalan Ara, SD 7/3d, Bandar Sri Damansara",
      "addressLocality": "Kuala Lumpur",
      "postalCode": "52200",
      "addressCountry": "MY"
    },
    "sameAs": [
      "https://www.facebook.com/daikimedia",
      "https://www.twitter.com/daikimedia",
      "https://www.linkedin.com/company/daikimedia"
    ]
  };

  return (

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />

  );
};

export default OrganizationSchema;