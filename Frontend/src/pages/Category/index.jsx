import { useContext } from "react";
import Container from "../../components/Container";
import Search from "../../components/Search";
import { Link } from "react-router";
import { GlobalContext } from "../../context/Context";
import NotFound from "../NotFound";

const Category = () => {
  const { products, categories } = useContext(GlobalContext);

  const category = decodeURIComponent(window.location.hash.split("/")[1]);
  const validCategory = categories
    .map((category) => category.nombre)
    .includes(category);

  if (!validCategory) return <NotFound />;

  return (
    <Container>
      <Search />

      <section className="flex flex-wrap gap-4 justify-center mt-8">
        {products
          .filter((product) => product.categoria === category)
          .map((product) => (
            <Link
              key={product.id}
              className="w-3/12 h-48"
              to={`/${category}/${product.id}`}
            >
              {product.titulo}
            </Link>
          ))}
      </section>
    </Container>
  );
};

export default Category;
