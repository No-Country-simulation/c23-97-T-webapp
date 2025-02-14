import { useContext } from "react";
import Code from "../../components/Code";
import Container from "../../components/Container";
import { GlobalContext } from "../../context/Context";
import Button from "../../components/Button";
import NotFound from "../NotFound";
import Return from "../../components/Return";
import Quantity from "../../components/Quantity";

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
      <Return category={category} />
      <section className="grid grid-cols-2 gap-12 items-center md:grid-cols-[24rem_1fr] md:items-start md:gap-16 md:gap-y-12">
        <img
          className="w-full max-w-96 rounded-md col-start-1 row-start-1 md:row-end-3"
          src={product.imagen_url}
          alt={product.titulo}
        />

        <div className="flex flex-col gap-4 col-start-1 row-start-2 col-end-3 md:col-start-2 md:row-start-1">
          <h2 className="font-sans text-[#8a7560] font-medium text-3xl text-balance">
            {product.titulo}
          </h2>
          <p className="text-pretty">{product.descripcion}</p>
          <span className="text-[#8a7560] font-bold text-lg underline underline-offset-4">
            ${product.precio}
          </span>
          <div className="flex flex-col gap-4 w-full items-center lg:flex-row lg:justify-evenly">
            <Quantity />
            <Button func={() => addToCart(product)}>Añadir al carrito</Button>
          </div>
        </div>

        <Code url={url} />
      </section>
    </Container>
  );
};

export default Product;
