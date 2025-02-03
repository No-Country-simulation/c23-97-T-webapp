import { useState } from "react";
import SummaryItems from "../SummaryItems";

const SummaryContainer = ({ compra }) => {
  const [expandido, setExpandido] = useState(false);

  const totalItems = compra.shoppingCart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <article className="bg-[#f5f2f0] p-4 rounded-2xl shadow-lg w-full mx-auto mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setExpandido(!expandido)}
      >
        <div>
          <p className="text-[#181411] font-semibold">Fecha: {compra.date}</p>
          <p className="text-[#8a7560]">Productos: {totalItems}</p>
          <p className="text-[#8a7560]">Total: ${compra.total}</p>
        </div>
        <div className="text-[#8a7560] font-bold text-xl">
          {expandido ? "▲" : "▼"}
        </div>
      </div>
      {expandido && (
        <div className="mt-3 bg-[#8a7560] p-3 rounded-xl">
          <p className="text-[#f5f2f0] font-semibold mb-2">
            Detalles de la compra:
          </p>
          <ul>
            {compra.shoppingCart.map((producto) => (
              <SummaryItems key={producto.id} item={producto} />
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};

export default SummaryContainer;
