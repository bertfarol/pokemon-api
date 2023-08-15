import React, { useState } from "react";

const Image = ({ src, imageLoader, alt, className }) => {
  const [isImageLoading, setIsImageLoading] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoading(true);
  };

  return (
    <img
      onLoad={handleImageLoad}
      src={isImageLoading ? src : imageLoader}
      alt={alt}
      className={className}
    />
  );
};

export default Image;
