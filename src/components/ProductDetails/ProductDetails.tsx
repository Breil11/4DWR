import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
      const response = await axios.get(
        // `https://world.openfoodfacts.org/api/v2/product/${id}.json`
        `https://world.openfoodfacts.org/product/${id}`
      );
      const product: Product = response.data.product;
      setProductDetails(product);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1> Product Details</h1>
      {productDetails ? (
        <div>
          <h3>{productDetails.commonName}</h3>
          <img src={productDetails.image_url} alt={productDetails.commonName} />
          <p>Brand: {productDetails.brands}</p>
          <p>Ingredients: {productDetails.ingredients_text}</p>
          <p>Category:{productDetails.categories}</p>
        </div>
      ) : (
        <p>ca charge...</p>
      )}
    </div>
  );
}

export default ProductDetails;
