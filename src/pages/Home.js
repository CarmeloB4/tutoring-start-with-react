import Card from "../components/Card";
import { useEffect, useState } from "react";
import Detail from "../components/Detail";
import naruto from "../assets/1.jpg";
import batman from "../assets/2.jpg";
import squid from "../assets/3.jpg";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [openDetail, setOpenDetail] = useState(false);
  const [product, setProduct] = useState();

  const shopProducts = [
    { name: "Prodotto 1", url: naruto },
    { name: "Prodotto 2", url: batman },
    { name: "Prodotto 3", url: squid },
  ];

  useEffect(() => {
    setProducts(shopProducts);
  }, []);

  const handleDetail = (product) => {
    setOpenDetail(true);
    setProduct(product);
  };

  const closeDetail = () => {
    setOpenDetail(false);
  };

  const buyProduct = (product) => {
    console.log(product);
  };

  return (
    <div className="Home">
      <div className="Card-list">
        {products &&
          products?.map((product) => (
            <li key={product.name}>
              <Card product={product} showDetail={handleDetail} />
            </li>
          ))}
      </div>
      {!openDetail && <h1>Benvenuti allo shop</h1>}
      {openDetail && (
        <Detail
          product={product}
          closeDetail={closeDetail}
          buyProduct={buyProduct}
        />
      )}
      <div></div>
      {/*  Carrello */}
    </div>
  );
};

export default Home;
