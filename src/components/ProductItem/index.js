const ProductItem = ({ title, photo, amount }) => {
  return (
    <li className="ml-3 mr-3 list-group-item">
      <p className="">Title: {title}</p>
      <img src={photo} alt={title} width="200" />
      <p>Amount: {amount}</p>
    </li>
  );
};

export default ProductItem;
