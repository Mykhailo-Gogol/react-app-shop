import ProductList from "../../components/ProductList";

const Products = ({ pageTitle }) => {
  return (
    <div className=" p-2 m-2 container-fluid border border-primary">
      <div className=" border p-3 m-3">
        <h5>{pageTitle}</h5>
      </div>
      <ProductList />
    </div>
  );
};

export default Products;
