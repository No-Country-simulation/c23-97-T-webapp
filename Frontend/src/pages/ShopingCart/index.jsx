import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import Container from "../../components/Container";

const ShopingCart = () => {
  const { shoppingCart } = useContext(GlobalContext);

  return (
    <Container>
      {shoppingCart.length > 0
        ? shoppingCart.map((item) => item.titulo)
        : "No hay productos en el carrito"}
    </Container>
  );
};

export default ShopingCart;
