import Button from "../../components/Button";

export const Chart = ({ item }) => {
  // Recibe las funciones como props

  const precioFormatedo = Number(item.product.precio).toFixed(2); // Formatea el precio DENTRO del map

  return (
    <li className="py-4 flex items-center justify-between">
      <div className="flex items-center">
        <img
          src={item.product.imagen_url || "/placeholder.svg"}
          alt={item.product.titulo}
          className="w-16 h-16 object-cover rounded mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold text-amber-900">
            {item.product.titulo}
          </h2>
          <p className="text-amber-700">${precioFormatedo} each</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button primary={false}>-</Button>
        <span className="w-8 text-center">{item.quantity}</span>
        <Button primary={false}>+</Button>
        <Button primary={false}>Remover</Button>
      </div>
    </li>
  );
};

export default Chart;
