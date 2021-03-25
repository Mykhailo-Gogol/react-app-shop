const ProductItem = ({ title, photo, amount, price }) => {
  return (
    <div class="card m-3 p-3" style={{ maxWidth: 18 + "em" }}>
      <img src={photo} class="card-img-top" alt={title} />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p clas="card-text">{price} ₴</p>
        <a href="/" class="btn btn-primary">
          Buy
        </a>
      </div>
    </div>
  );
};

export default ProductItem;
