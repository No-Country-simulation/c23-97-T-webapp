const SummaryItems = ({ item: producto }) => {
  return (
    <li key={producto.id} className="text-[#f5f2f0]">
      {producto.product.titulo} - {producto.quantity} x $
      {producto.product.precio}
    </li>
  );
};

export default SummaryItems;
