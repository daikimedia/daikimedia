"use client";
import { useState } from "react";
import Image from "next/image";

const FallbackImage = ({
  src,
  alt,
  fallbackSrc = "/images/blog/blog-fallback-img.webp",
  className = "",
  width,
  height,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  // If we're using Next.js Image component
  if (width && height) {
    return (
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onError={handleError}
        {...props}
      />
    );
  }

  // Regular img tag
  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
};

export default FallbackImage;
