import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [purchased, setPurchased] = useState([]);

  useEffect(() => {
    getData("productos", setProducts);
    getData("tarjetas", setCategories);
  }, []);

  const getData = async (endpoint, set) => {
    const response = await fetch(
      `https://apionline-a7w9.onrender.com/api/${endpoint}/`
    );
    const data = await response.json();
    set(data);
  };

  const totalItems = shoppingCart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = shoppingCart
    .reduce((acc, item) => acc + item.product.precio * item.quantity, 0)
    .toFixed(2);

  const clearCart = () => {
    setShoppingCart([]);
  };

  const completePurchase = () => {
    setPurchased(
      purchased.concat({
        shoppingCart,
        date: new Date().toLocaleDateString(),
        total: totalPrice,
      })
    );
    setShoppingCart([]);

    console.log(purchased);
  };

  const addToCart = (product) => {
    const itemExists = shoppingCart.find(
      (cartProduct) => cartProduct.product.id === product.id
    );

    if (itemExists) {
      setShoppingCart(
        shoppingCart.map((cartProduct) => {
          if (cartProduct.product.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + 1,
            };
          } else {
            return cartProduct;
          }
        })
      );
    } else {
      setShoppingCart((prevState) => [...prevState, { product, quantity: 1 }]);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        products,
        categories,
        shoppingCart,
        totalItems,
        totalPrice,
        purchased,
        addToCart,
        clearCart,
        completePurchase,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
