import Button from "../../components/Button";

export const Chart = ({ item }) => {
  const precioFormateado = Number(item.product.precio).toFixed(2);

  return (
    <li className="py-4 flex flex-col md:flex-row items-center justify-between border-b border-gray-300 w-full">
      {/* Contenedor de Imagen y Título */}
      <div className="flex items-center w-full md:w-auto">
        <img
          src={item.product.imagen_url || "/placeholder.svg"}
          alt={item.product.titulo}
          className="w-12 h-12 md:w-16 md:h-16 object-cover rounded mr-2 md:mr-4"
        />
        <div className="text-center md:text-left">
          <h2 className="text-sm md:text-lg font-semibold text-amber-900">
            {item.product.titulo}
          </h2>
          <p className="text-xs md:text-sm text-amber-700">${precioFormateado} c/u</p>
        </div>
      </div>

      {/* Controles de Cantidad y Botón de Remover */}
      <div className="flex items-center justify-between w-full md:w-auto space-x-1 md:space-x-2 mt-2 md:mt-0">
        <Button primary={false} className="text-xs px-2 py-1">-</Button>
        <span className="w-6 text-center text-sm md:text-lg">{item.quantity}</span>
        <Button primary={false} className="text-xs px-2 py-1">+</Button>
        <Button primary={false} className="text-xs px-2 py-1">Remover</Button>
      </div>
    </li>
  );
};

export default Chart;

