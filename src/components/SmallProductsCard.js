import Card from "@mui/material/Card";
import Image from "./Image";

/**
 * 
 * @param {number} imageId 
 * @param {string} productImage 
 * @param {number} activeCardId 
 * @param {function} handleCenteredImage 
 * @param {string} bodyColor 
 * @returns single small card on the main main card of carousel.
 */
const SmallProductsCard = ({
  imageId,
  productImage,
  activeCardId,
  handleCenteredImage,
  dressColor,
}) => {
  return (
    <Card
      className="small-product-card"
      style={{ border: activeCardId === imageId && `2px solid ${dressColor}` }}
      onClick={() =>
        handleCenteredImage(imageId, productImage.src, productImage.src)
      }
      onMouseOver={() =>
        handleCenteredImage(imageId, productImage.src, productImage.src)
      }
    >
      <Image img_src={productImage.src} img_alt={productImage.alt} />
    </Card>
  );
};

export default SmallProductsCard;
