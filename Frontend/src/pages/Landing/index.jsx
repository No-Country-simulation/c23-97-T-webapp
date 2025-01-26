import { useContext } from "react";
import Search from "../../components/Search";
import CategoryItem from "../../components/CategoryItem";
import Container from "../../components/Container";
import { GlobalContext } from "../../context/Context";
import { Link } from "react-router";

const Landing = () => {
  const { products, categories } = useContext(GlobalContext);

  return (
    <Container>
      <Search />
      <div className="flex flex-wrap justify-center items-center gap-4 my-4">
        {categories.map((category, index) => (
          <CategoryItem key={index} category={category} />
        ))}
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {products.map((product) => (
          <Link key={product.id} className="w-3/12  h-48" to={`/${product.id}`}>
            {product.nombre}
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Landing;
