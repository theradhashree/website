import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Container from "@mui/material/Container";
import { useLocation } from "react-router-dom";

/**
 * 
 * @returns Some more details about product like article number, solor, size, washing instructions etc.
 */
const ProductDetails = () => {
  //taking the passed state from ProductInfo component
const { state } = useLocation();
const detailInfo = state?.detail_info; ;

  return (
    <Container className="product-details">
      <Typography>Article No: O102</Typography>
      <Typography>Price: 4999</Typography>
      <Typography>Color: Lavender</Typography>
      <Box>
        <Typography>Size: One</Typography>
      </Box>
      <Box>
        <Typography>Washcare Instruction:</Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={true} />}
            label="Machine Wash"
          />
          <FormControlLabel
            control={<Checkbox checked={true} />}
            label="Hand Wash"
          />
          <FormControlLabel control={<Checkbox />} disabled label="Dry Clean" />
        </FormGroup>
        <Box className="product-long-description">
          <Typography>Product description:</Typography>
          <Typography>{detailInfo}</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetails;
