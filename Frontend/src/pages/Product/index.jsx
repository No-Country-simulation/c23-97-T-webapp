import { useContext } from "react";
import Code from "../../components/Code";
import Container from "../../components/Container";
import { GlobalContext } from "../../context/Context";
import Button from "../../components/Button";

const Product = () => {
  const { products } = useContext(GlobalContext);

  const url = window.location.href;
  const category = window.location.hash.split("/")[1];
  const id = parseInt(window.location.hash.split("/")[2]);

  const product = products.find(
    (product) => product.id === id && product.categoria === category
  );

  if (!product) return <h1>Product not found</h1>;

  return (
    <Container>
      <article className="grid grid-cols-2 gap-4 items-center md:justify-items-center md:items-start">
        <img
          className="w-full max-w-96 rounded-md col-start-1 row-start-1 md:row-end-3"
          src={product.url_imagen}
          alt={product.nombre}
        />

        <div className="flex flex-col gap-4 col-start-1 row-start-2 col-end-3 md:col-start-2 md:row-start-1">
          <h2 className="font-sans text-[#8a7560] font-medium text-3xl ">
            {product.nombre}
          </h2>
          <p>{product.descripcion}</p>
          <span>${product.precio}</span>
          <Button>Add to cart</Button>
        </div>

        <Code url={url} />
      </article>
    </Container>
  );
};

export default Product;
