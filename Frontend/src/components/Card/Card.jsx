const Card = ({ product }) => {
  return (
    <article className="flex flex-col bg-[#f5f2f0] rounded-lg overflow-hidden shadow-md border border-gray-300 w-80 h-full">
      <figure className="relative h-40">
        <img
          className="w-full h-full object-cover object-center"
          src={product.imagen_url}
          alt={product.titulo}
        />
      </figure>
      <div className="p-4 flex flex-col grow justify-between">
        <h3 className="text-[#181411] font-bold text-lg mb-2">
          {product.titulo}
        </h3>
        <p className="text-[#8a7560] font-semibold text-lg">
          ${product.precio}
        </p>
      </div>
    </article>
  );
};

export default Card;
