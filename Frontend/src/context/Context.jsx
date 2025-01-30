import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

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

  const addToCart = (product) => {
    setShoppingCart((prevState) => [...prevState, product]);
  };

  return (
    <GlobalContext.Provider
      value={{ products, categories, shoppingCart, addToCart }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
