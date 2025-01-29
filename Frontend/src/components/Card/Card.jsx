import React from 'react'


export const Card = ({product}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg" >
      <img className="w-full" src={product.imagen_url} alt="Sunset in the mountains"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.titulo}</div>
        <p className="text-gray-700 text-base">
          {product.descripcion}
        </p>
        <span className="text-gray-700 text-base">
          ${product.precio}
        </span>
      </div>      
    </div>
    )
  }

export default Card;

