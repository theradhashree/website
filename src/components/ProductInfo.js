import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

/**
 * 
 * @param {string} product_name 
 * @param {string} product_concise_info
 * @param {string} product_detail_info
 * @returns product details on card including a button on clicking which navigates to the more details about product.
 */
const ProductInfo = ({
  product_name,
  product_concise_info,
  product_detail_info,
}) => {
  const navigate = useNavigate();

  /**
   * 
   * @param {string} detail_info 
   * this function navigates to productDetail page which display the details like washing instructions, size and many more things.
   */
  function handleProductDetails(detail_info) {
    navigate("/product-details", { state: { detail_info } });
  }
  console.log(product_concise_info, product_detail_info);

  return (
    <>
      <Typography variant="h3" className="product-name">
        {product_name}
      </Typography>
      <Typography variant="p" className="product-concise-info">
        {product_concise_info}
      </Typography>
      <Button
        variant="contained"
        size="medium"
        onClick={() => handleProductDetails(product_detail_info)}
      >
        DETAILS
      </Button>
    </>
  );
};

export default ProductInfo;
