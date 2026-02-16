'use client';

import { useState } from 'react';
import { getCMSImageUrl } from "@/utils/imageUtils";

const ClientImage = ({ src, alt, className, width, height, priority = false }) => {
  const [imgSrc, setImgSrc] = useState(getCMSImageUrl(src));

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setImgSrc('/images/blog/blog-fallback-img.webp')}
    />
  );
};

export default ClientImage;