import { useContext } from "react";
import { GlobalContext } from "../../context/Context";
import Button from "../Button";

const ShoppingContainer = ({ children }) => {
  const { totalPrice, clearCart, completePurchase } = useContext(GlobalContext);

  return (
    <div className="flex flex-col gap-4 p-10 w-full border-2 border-[#8a7560] rounded-md">
      {children}

      <div className="flex flex-col-reverse justify-between items-center border-t-2 border-[#8a7560] pt-10 md:flex-row">
        <div className="flex gap-4 items-center pt-5 md:pt-0">
          <Button primary={false} func={clearCart}>
            Limpiar carrito
          </Button>
          <Button func={completePurchase}>Finalizar compra</Button>
        </div>
        <p className="text-[#181411] font-bold font-sans text-2xl text-end ">
          Total: ${totalPrice}
        </p>
      </div>
    </div>
  );
};

export default ShoppingContainer;
