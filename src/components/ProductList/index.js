import ProductItem from "../ProductItem";
import products from "../../data/products.json";

const ProductList = () => {
  return (
    <ul className="d-flex flex-wrap pl-0">
      {products.map(({ id, title, photo, amount, price }) => (
        <ProductItem
          key={id}
          title={title}
          photo={photo}
          amount={amount}
          price={price}
        />
      ))}
    </ul>
  );
};

export default ProductList;
