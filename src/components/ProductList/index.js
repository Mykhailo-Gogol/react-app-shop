import ProductItem from "../ProductItem";
import products from "../data/products.json";

const ProductList = () => {
  return (
    <ul className="d-flex flex-wrap">
      {products.map(({ id, title, photo, amount }) => (
        <ProductItem key={id} title={title} photo={photo} amount={amount} />
      ))}
    </ul>
  );
};

export default ProductList;
