import React from "react";
import ContentLoader from "react-content-loader";

function ProductLoader() {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={300}
      viewBox="0 0 400 300"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      {/* Create rectangles for the product card skeleton */}
      <rect x="0" y="0" rx="5" ry="5" width="400" height="200" />
      <rect x="10" y="220" rx="3" ry="3" width="180" height="10" />
      <rect x="10" y="240" rx="3" ry="3" width="220" height="10" />
      <rect x="10" y="260" rx="3" ry="3" width="180" height="10" />
      <rect x="10" y="280" rx="3" ry="3" width="220" height="10" />
    </ContentLoader>
  );
}

export default ProductLoader;
