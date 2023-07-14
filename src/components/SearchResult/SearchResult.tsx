import React from 'react';

interface Product {
  barcode: string;
  commonName: string;
  brands: string;
}

interface SearchResultsProps {
  products: Product[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ products }) => {
  if (products.length === 0) {
    return <p>aucun résultat trouvé</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.barcode}>
          <h3>{product.commonName}</h3>
          <p>Marque : {product.brands}</p>
          <p>Identifiant : {product.barcode}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
