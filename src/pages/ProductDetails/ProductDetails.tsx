import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Product {
  code: string;
  product_name: string;
  image_url: string;
  ingredients_text: string;
  brands: string;
  categories: string;
}

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [productDetails, setProductDetails] = useState<Product | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://world.openfoodfacts.org/api/v0/product/${id}.json`
      );
      const product: Product = response.data.product;
      setProductDetails(product);
    } catch (error) {
      // Handle API error
      // Display an error message or provide feedback to the user
    }
  };

  return (
    <div>
      {productDetails ? (
        <div>
          <h3>{productDetails.product_name}</h3>
          <img src={productDetails.image_url} alt={productDetails.product_name} />
          <p>Brand: {productDetails.brands}</p>
          <p>Ingredients: {productDetails.ingredients_text}</p>
          <p>Category: {productDetails.categories}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
