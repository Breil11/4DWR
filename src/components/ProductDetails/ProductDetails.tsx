import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./ProductDetails.css";

interface Product {
  barcode: string;
  commonName: string;
  image_url: string;
  ingredients_text: string;
  brands: string;
  categories: string;
}

function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [productDetails, setProductDetails] = useState<Product | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://world.openfoodfacts.org/api/v2/product/${id}.json`);
      const product: Product = response.data.product;
      setProductDetails(product);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Product Details</h1>
      {productDetails ? (
        <div>
          {/* <div className="data-container">
            <span className="data-label">Img:</span>
            <span className="data-value"></span><img src={productDetails.image_url} alt={productDetails.commonName} />
          </div> */}
          <img src={productDetails.image_url} alt={productDetails.commonName} />
          <div className="data-container">
            <span className="data-label">Common Name:</span>
            <span className="data-value">{productDetails.commonName}</span>
          </div>
          <div className="data-container">
            <span className="data-label">Brands:</span>
            <span className="data-value">{productDetails.brands}</span>
          </div>
          <div className="data-container">
            <span className="data-label">Ingredients:</span>
            <span className="data-value">{productDetails.ingredients_text}</span>
          </div>
          <div className="data-container">
            <span className="data-label">Category:</span>
            <span className="data-value">{productDetails.categories}</span>
          </div>

        </div>
      ) : (
        <p>ca charge...</p>
      )}
    </div>
  );
}

export default ProductDetails;
