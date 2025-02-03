import { useContext } from "react";
import Button from "../Button";
import { GlobalContext } from "../../context/Context";

const Quantity = ({ item = null }) => {
  const { newQuantity, handleDecrement, handleIncrement } =
    useContext(GlobalContext);

  const amount = item ? item.quantity : newQuantity;

  return (
    <div className="flex items-center gap-3">
      <Button primary={false} func={() => handleDecrement(item)}>
        -
      </Button>
      <span className="text-center text-lg font-bold">{amount}</span>
      <Button primary={false} func={() => handleIncrement(item)}>
        +
      </Button>
    </div>
  );
};

export default Quantity;
