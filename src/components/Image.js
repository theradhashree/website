import React from "react";

/**
 *
 * @param {string} img_src
 * @param {string} img_alt
 * @returns image component
 */
const Image = ({ img_src, img_alt }) => {
  return <img src={img_src} alt={img_alt} />;
};

export default Image;
