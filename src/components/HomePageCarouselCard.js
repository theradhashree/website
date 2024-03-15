import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import ProductInfo from "./ProductInfo.js";
import SmallProductsCard from "./SmallProductsCard.js";
import BrandLogo from "./BrandLogo.js";
import Image from "./Image.js";
import "react-responsive-carousel/lib/styles/carousel.min.css";

/**
 *
 * @param {object}  product
 * @param {string}  bodyColor
 * @returns a single card of carousel
 */
const HomePageCarouselCard = ({ product, bodyColor }) => {
  const [centerImageUrl, setCenterImageUrl] = useState(product.image[1].src);
  const [centerImageAlt, setCenterImageAlt] = useState(product.image[1].alt);
  const [activeCardId, setActiveCardId] = useState(product.image[1].id);

  /**
   * 
   * @param {number} id 
   * @param {string} img_src 
   * @param {string} img_alt 
   * This function sets the current small card whose image will come in middle
   */
  function handleCenteredImage(id, img_src, img_alt) {
    setCenterImageUrl(img_src);
    setCenterImageAlt(img_alt);
    setActiveCardId(id);
  }

  return (
    <Box className="product-card-wrapper">
      <Card className="product-card">
        <Box className="card-container">
          <BrandLogo />
          <Box className="column info-column">
            <ProductInfo
              product_name={product.name}
              product_concise_info={product.concise_info}
              product_detail_info={product.detail_info}
            />
          </Box>
          <Box className="column image-column">
            <Image img_src={centerImageUrl} img_alt={centerImageAlt} />
          </Box>
          <Box className="column small-cards-column">
            {product.image.map((productImage) => (
              <SmallProductsCard
                key={productImage.id}
                imageId={productImage.id}
                productImage={productImage}
                activeCardId={activeCardId}
                handleCenteredImage={handleCenteredImage}
                bodyColor={bodyColor}
              />
            ))}
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default HomePageCarouselCard;
