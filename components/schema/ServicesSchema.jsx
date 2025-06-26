import Head from 'next/head';
import PropTypes from 'prop-types';

const ServicesSchema = ({ services }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": "https://www.daikimedia.com/#services",
        "name": "Daiki Media Services",
        "description": "Comprehensive SEO, digital advertising, and ecommerce services provided by Daiki Media to drive business growth and online visibility.",
        "itemListElement": services.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Service",
                "@id": service.url,
                "name": service.name,
                "description": service.description,
                "serviceType": service.serviceType,
                "provider": {
                    "@type": "Organization",
                    "@id": "https://www.daikimedia.com/#organization",
                    "name": "Daiki Media",
                    "url": "https://www.daikimedia.com",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.daikimedia.com/logo-dark-version.png",
                        "width": 200,
                        "height": 60
                    }
                },
                "areaServed": service.areaServed || ["MY", "US"],
                "offers": service.offers ? service.offers.map((offer) => ({
                    "@type": "Offer",
                    "name": offer.name,
                    "description": offer.description,
                    "price": offer.price || undefined,
                    "priceCurrency": offer.priceCurrency || "MYR",
                    "url": offer.url || service.url
                })) : []
            }
        }))
    };

    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
        </Head>
    );
};

ServicesSchema.propTypes = {
    services: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            serviceType: PropTypes.string.isRequired,
            areaServed: PropTypes.arrayOf(PropTypes.string),
            offers: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    description: PropTypes.string.isRequired,
                    price: PropTypes.string,
                    priceCurrency: PropTypes.string,
                    url: PropTypes.string
                })
            )
        })
    ).isRequired
};

export default ServicesSchema;