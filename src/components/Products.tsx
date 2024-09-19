import { FunctionComponent } from "react";

interface ProductsProps {}

interface Product {
  id: string;
  name: string;
  price: number;
}

const Products: FunctionComponent<ProductsProps> = () => {
  let products: Product[] = [
    { id: "01", name: "Playstation", price: 5000 },
    { id: "02", name: "Xbox", price: 4500 },
    { id: "03", name: "Nintendo", price: 3000 },
  ];
  //   let products: Product[] = [];
  return (
    <>
      <h2>Products</h2>
      {products.length ? (
        <ul>
          {products.map((product: Product) => (
            <li key={product.id}>
              {product.name}, {product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>No products</p>
      )}
    </>
  );
};

export default Products;
