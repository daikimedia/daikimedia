import Head from 'next/head';
import PropTypes from 'prop-types';

const BlogSchema = ({ posts }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": "https://www.daikimedia.com/#blog",
        "name": "Daiki Media Blog",
        "description": "Insights and tips on SEO, digital marketing, iGaming, and web development from Daiki Media's expert team.",
        "publisher": {
            "@type": "Organization",
            "@id": "https://www.daikimedia.com/#organization",
            "name": "Daiki Media",
            "url": "https://www.daikimedia.com"
        },
        "blogPost": posts.map((post) => ({
            "@type": "BlogPosting",
            "@id": post.url,
            "headline": post.title,
            "description": post.description,
            "datePublished": post.datePublished,
            "author": {
                "@type": "Person",
                "name": post.author || "Daiki Media Team"
            },
            "image": post.image || "https://www.daikimedia.com/default-blog-image.jpg",
            "url": post.url,
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": post.url
            },
            "publisher": {
                "@type": "Organization",
                "@id": "https://www.daikimedia.com/#organization",
                "name": "Daiki Media",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.daikimedia.com/logo-dark-version.png",
                    "width": 200,
                    "height": 60
                }
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

BlogSchema.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            datePublished: PropTypes.string.isRequired,
            author: PropTypes.string,
            image: PropTypes.string
        })
    ).isRequired
};

export default BlogSchema;