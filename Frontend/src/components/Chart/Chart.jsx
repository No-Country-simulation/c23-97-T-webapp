import React from 'react'



export const Chart = ({ items }) => {
  const precioFormatedo = Number(item.precio).toFixed(2)
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6 border border-amber-200">
          <ul className="divide-y divide-amber-200">
            {items.map((item) => (
              <li key={item.id} className="py-4 flex items-center justify-between">
                <div className="flex items-center">
                  <img src={item.imagen_url || "/placeholder.svg"} alt={item.titulo} className="w-16 h-16 object-cover rounded mr-4" />
                  <div>
                    <h2 className="text-lg font-semibold text-amber-900">{item.titulo}</h2>
                    <p className="text-amber-700">${precioFormatedo} each</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                    className="border-amber-300 text-amber-700 hover:bg-amber-100"
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                    className="border-amber-300 text-amber-700 hover:bg-amber-100"
                  >
                    +
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    onClick={() => removeItem(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    Remove
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center border-t border-amber-200 pt-6">
            <p className="text-xl font-bold text-amber-900">Total: ${getTotalPrice().toFixed(2)}</p>
            <div className="space-x-2">
              <Button 
                variant="outline" 
                onClick={clearCart} 
                className="border-amber-300 text-amber-700 hover:bg-amber-100"
              >
                Clear Cart
              </Button>
              <Link href="/checkout">
                <Button className="bg-amber-700 hover:bg-amber-800 text-amber-50">Proceed to Checkout</Button>
              </Link>
            </div>
          </div>
        </div>        
    </div>
  )
}

export default Chart;