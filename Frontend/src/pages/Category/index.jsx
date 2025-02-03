import { useContext } from "react";
import Container from "../../components/Container";
import Search from "../../components/Search";
import { Link } from "react-router";
import { GlobalContext } from "../../context/Context";
import NotFound from "../NotFound";
import Card from "../../components/Card/Card";

const Category = () => {
  const { products, categories } = useContext(GlobalContext);

  const category = decodeURIComponent(window.location.hash.split("/")[1]);

  const validCategory = categories
    .map((category) => category.encabezado)
    .includes(category);

  if (!validCategory) return <NotFound />;

  return (
    <Container>
      <Search category={category} />
      <p className="self-start text-gray-500 text-sm mt-2">
        * Para ver todos los productos, haz click en el botón de buscar
      </p>

      <section className="flex flex-wrap gap-10 justify-center mt-12">
        {products.length > 0 ? (
          products
            .filter(
              (product) => product.categoria === category.toLocaleLowerCase()
            )
            .map((product) => (
              <Link key={product.id} to={`/${category}/${product.id}`}>
                <Card product={product} />
              </Link>
            ))
        ) : (
          <p>No se encontraron productos</p>
        )}
      </section>
    </Container>
  );
};

export default Category;
