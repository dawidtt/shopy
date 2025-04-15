import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useFetchShop } from "../../hooks/useFetchShop";
import { useParams } from "react-router-dom";
function ProductPage({ title, description, price, rating }) {
  const { id } = useParams();
  const { data, loading, error } = useFetchShop(`/${id}`);

  return (
    <div>
      <Header></Header>
      <div>
        <p>{data && data.title}</p>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default ProductPage;
