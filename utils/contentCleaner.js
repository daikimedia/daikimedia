// utils/contentCleaner.js
export function cleanBlogContent(html) {
  if (!html) return "";
  
  // First, decode HTML entities
  let cleaned = html
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  
  // Remove Quill cursor artifacts
  cleaned = cleaned.replace(/<[^>]*class="ql-cursor"[^>]*>.*?<\/[^>]*>/g, '');
  cleaned = cleaned.replace(/<[^>]*ql-cursor[^>]*>\s*﻿?\s*<\/[^>]*>/g, '');
  
  // Remove the specific pattern you mentioned
  cleaned = cleaned.replace(
    /<p><strong[^>]*><span[^>]*class="ql-cursor"[^>]*>﻿?<\/span><\/strong><\/p>/g, 
    ''
  );
  
  // Remove empty paragraphs with <br>
  cleaned = cleaned.replace(/<p>(\s|&nbsp;)*<br\s*\/?>(\s|&nbsp;)*<\/p>/gi, '');
  
  // Remove empty paragraphs with only whitespace or &nbsp;
  cleaned = cleaned.replace(/<p>(\s|&nbsp;)*<\/p>/gi, '');
  
  // Remove paragraphs with only empty spans or strong tags
  cleaned = cleaned.replace(/<p>\s*<(?:strong|span|em|b)[^>]*>\s*<\/\1>\s*<\/p>/g, '');
  
  // Remove multiple consecutive empty lines
  cleaned = cleaned.replace(/(<br\s*\/?>\s*){2,}/gi, '<br>');
  
  // Remove zero-width spaces and other invisible characters
  cleaned = cleaned.replace(/[\u200B-\u200D\uFEFF]/g, '');
  cleaned = cleaned.replace(/﻿/g, ''); // Remove the specific character
  
  // Normalize spacing around headings
  cleaned = cleaned.replace(/<\/h[1-6]>\s*<br\s*\/?>\s*<h[1-6]>/g, '</h$1><h$2>');
  
  // Remove leading/trailing whitespace
  cleaned = cleaned.trim();
  
  return cleaned;
}