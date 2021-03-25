import default_image from "../../assets/drawables/default_image.png";

const ProductItem = ({ title, photo, amount }) => {
  return (
    <li className="m-3 p-3 list-group-item border">
      <p className="">Title: {title}</p>
      <img src={photo ? photo : default_image} alt={title} width="200" />
      <p>Amount: {amount}</p>
    </li>
  );
};

export default ProductItem;
