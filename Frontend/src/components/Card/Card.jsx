

const Card = ({ product }) => {
  return (
    <div className="bg-[#f5f2f0] rounded-lg overflow-hidden shadow-md border border-gray-300 max-w-sm">
      <div className="relative h-40">
        <img
          className="w-full h-full object-cover object-center"
          src={product.imagen_url}
          alt={product.titulo}
        />        
      </div>
      <div className="p-4">
        <h3 className="text-[#181411] font-bold text-lg mb-2">
          {product.titulo}
        </h3>
        <div className="flex justify-between items-center">
          <span className="text-[#8a7560] font-semibold text-lg">${product.precio}</span>          
        </div>
      </div>
    </div>    
  );
};

export default Card;

