const ProductItem = ({ title, photo, amount, price }) => {
  const preventReloadHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="card m-3 p-3" style={{ maxWidth: 18 + "em" }}>
      <img src={photo} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p className="card-text">{price} ₴</p>
        <a href="/" onClick={preventReloadHandler} className="btn btn-primary">
          Buy
        </a>
      </div>
    </div>
  );
};

export default ProductItem;
