const Card = ({ product, showDetail }) => {
  return (
    <div className="Card">
      <img src={product.url} />
      <h1>{product.name}</h1>
      <button onClick={() => showDetail(product)}>Dettagli</button>
    </div>
  );
};

export default Card;
