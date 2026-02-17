import styles from './BlogContent.module.css';
import { cleanBlogContent } from '@/utils/contentCleaner';

export default function BlogContent({ content }) {
  const processedContent = cleanBlogContent(content);
  
  // Add your existing FAQ processing
  const processedWithFAQs = processedContent.replace(
    /<p><strong>(FAQ|FAQs|Frequently Asked Questions)<\/strong>/g,
    '<p data-type="faq-title"><strong>$1</strong>'
  ).replace(
    /<p><strong>(.*?\?)<\/strong><\/p>/g,
    '<p data-type="faq-question"><strong>$1</strong></p>'
  );

  return (
    <div className={styles.wrapper}>
      <div dangerouslySetInnerHTML={{ __html: processedWithFAQs }} />
    </div>
  );
}