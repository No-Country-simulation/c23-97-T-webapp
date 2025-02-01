import Button from "../../components/Button";


export const Chart = ({item}) => { // Recibe las funciones como props
  
    const precioFormatedo = Number(item.product.precio).toFixed(2); // Formatea el precio DENTRO del map
  
    return (
      <li key={item.product.id} className="py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src={item.product.imagen_url || "/placeholder.svg"} alt={item.product.titulo} className="w-16 h-16 object-cover rounded mr-4" />
          <div>
            <h2 className="text-lg font-semibold text-amber-900">{item.product.titulo}</h2>
            <p className="text-amber-700">${precioFormatedo} each</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            //variant="outline"
            //size="sm"
            //onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
            //className="border-amber-300 text-amber-700 hover:bg-amber-100"
          >
            -
          </Button>
          <span className="w-8 text-center">{item.quantity}</span>
          <Button
            //variant="outline"
            //size="sm"
            //onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
            //className="border-amber-300 text-amber-700 hover:bg-amber-100"
          >
            +
          </Button>
          <Button 
            //variant="destructive" 
            //size="sm" 
            //onClick={() => removeItem(item.id)}
            //className="bg-red-500 hover:bg-red-600 text-white"
          >
            Remover
          </Button>
        </div>
      </li>
      )
    }

  

export default Chart;