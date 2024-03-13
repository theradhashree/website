import React from "react";
import brand_logo from "../assets/Images/brand_logo.png";
import Box from "@mui/material/Box";
import Image from "./Image";

/**
 * 
 * @returns Brand logo image
 */
const BrandLogo = () => {
  return (
    <Box className="column brand-column">
      <Image img_src={brand_logo} img_alt="brand-logo" />
    </Box>
  );
};

export default BrandLogo;
