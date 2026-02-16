import styles from './BlogContent.module.css';

// This is a Server Component - NO "use client" needed
export default function BlogContent({ content }) {
  const decodeHtmlEntities = (html) => {
    if (!html) return "";
    return html
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
  };

  // Optional: Add custom data attributes for special styling
  const processContent = (html) => {
    if (!html) return "";
    
    let processed = decodeHtmlEntities(html);
    
    // Add data attributes to identify FAQ sections
    processed = processed.replace(
      /<p><strong>(FAQ|FAQs|Frequently Asked Questions)<\/strong>/g,
      '<p data-type="faq-title"><strong>$1</strong>'
    );
    
    processed = processed.replace(
      /<p><strong>(.*?)<\/strong><\/p>(?!.*data-type)/g,
      (match, p1) => {
        // Check if this looks like a question (ends with ?)
        if (p1.trim().endsWith('?')) {
          return `<p data-type="faq-question"><strong>${p1}</strong></p>`;
        }
        return match;
      }
    );
    
    return processed;
  };

  return (
    <div className={styles.wrapper}>
      <div 
        dangerouslySetInnerHTML={{
          __html: processContent(content),
        }}
      />
    </div>
  );
}