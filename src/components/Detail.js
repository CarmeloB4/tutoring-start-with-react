const Detail = ({ product, closeDetail, buyProduct }) => {
  return (
    <div className="Detail">
      <img src={product.url} />
      <h1>{product.name}</h1>
      <button onClick={() => closeDetail()}>Chiudi finestra</button>
      <button onClick={() => buyProduct(product)}>Acquista</button>
    </div>
  );
};

export default Detail;
