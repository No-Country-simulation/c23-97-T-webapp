import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import Container from "../../components/Container";
import ShoppingContainer from "../../components/ShoppingContainer";
import Button from "../../components/Button";
import { Link } from "react-router";
import Chart from "../../components/Chart/Chart";

const ShopingCart = () => {
  const { shoppingCart } = useContext(GlobalContext);

  return (
    <Container>
      {shoppingCart.length > 0 ? (
        <ShoppingContainer>
          {shoppingCart.map((item) => {
            return <Chart key={item.product.id} item={item} />;
          })}
        </ShoppingContainer>
      ) : (
        <div className="flex flex-col gap-4 w-full items-center">
          <p>No hay productos en el carrito</p>
          <Link to="/">
            <Button>Volver al inicio</Button>
          </Link>
        </div>
      )}
    </Container>
  );
};

export default ShopingCart;
