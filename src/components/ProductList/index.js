import ProductItem from "../ProductItem";
import products from "../../data/products.json";

const ProductList = () => {
  const apiKey = "hZxMaekVwU4tKeBajxXTPFzSBRyMYGNT";
  fetch(
    `https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=${apiKey}`
  )
    .then((res) => res.json())
    .then(({ results }) => console.log(results));

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
