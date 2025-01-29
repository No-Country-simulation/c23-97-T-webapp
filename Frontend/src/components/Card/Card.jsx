import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="bg-[#f5f2f0] rounded-lg overflow-hidden shadow-md border border-gray-300 max-w-sm">
      <img className="w-full h-40 object-cover object-top" src={product.imagen_url} alt={product.titulo} />
      <div className="p-4">
        <h3 className="text-[#181411] font-bold text-lg mb-2">{product.titulo}</h3>
        <p className="text-[#181411] text-sm mb-3">{product.descripcion}</p>
        <div className="flex justify-between items-center">
          <span className="text-[#8a7560] font-semibold text-lg">${product.precio}</span>
          <button className="bg-[#8a7560] text-white px-4 py-2 rounded-md hover:bg-[#6e5b48] transition">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

