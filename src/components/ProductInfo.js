import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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
}) => {

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
      >
        Coming Soon....
      </Button>
    </>
  );
};

export default ProductInfo;
