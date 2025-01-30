import { useContext } from "react";
import Code from "../../components/Code";
import Container from "../../components/Container";
import { GlobalContext } from "../../context/Context";
import Button from "../../components/Button";
import NotFound from "../NotFound";

const Product = () => {
  const { products, addToCart } = useContext(GlobalContext);

  const url = window.location.href;
  const category = decodeURIComponent(window.location.hash.split("/")[1]);
  const id = parseInt(window.location.hash.split("/")[2]);

  const product = products.find(
    (product) =>
      product.id === id && product.categoria === category.toLocaleLowerCase()
  );

  if (!product) return <NotFound />;

  return (
    <Container>
      <section className="grid grid-cols-2 gap-4 items-center md:justify-items-center md:items-start">
        <img
          className="w-full max-w-96 rounded-md col-start-1 row-start-1 md:row-end-3"
          src={product.imagen_url}
          alt={product.titulo}
        />

        <div className="flex flex-col gap-4 col-start-1 row-start-2 col-end-3 md:col-start-2 md:row-start-1">
          <h2 className="font-sans text-[#8a7560] font-medium text-3xl ">
            {product.titulo}
          </h2>
          <p>{product.descripcion}</p>
          <span>${product.precio}</span>
          <Button func={() => addToCart(product)}>Add to cart</Button>
        </div>

        <Code url={url} />
      </section>
    </Container>
  );
};

export default Product;
