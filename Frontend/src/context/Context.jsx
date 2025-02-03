import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [purchased, setPurchased] = useState([]);
  const [newQuantity, setNewQuantity] = useState(1);

  const { pathname } = useLocation();

  useEffect(() => {
    getData("productos", setProducts);
    getData("tarjetas", setCategories);
  }, []);

  useEffect(() => {
    getData("productos", setProducts);
    setNewQuantity(1);
  }, [pathname]);

  const getData = async (endpoint, set) => {
    const response = await fetch(
      `https://apionline-a7w9.onrender.com/api/${endpoint}/`
    );
    const data = await response.json();
    set(data);
  };

  const searchItems = async (category, searchTerm) => {
    if (!searchTerm) {
      getData("productos", setProducts);
      return;
    }

    const filteredItems = await fetch(
      `https://apionline-a7w9.onrender.com/api/productos/${category}/?titulo=${searchTerm}`
    );
    const data = await filteredItems.json();
    setProducts(data);
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
  };

  const addToCart = (product) => {
    const itemExists = shoppingCart.find(
      (cartProduct) => cartProduct.product.id === product.id
    );

    if (itemExists) {
      updateQuantity(itemExists, newQuantity);
    } else {
      setShoppingCart((prevState) => [
        ...prevState,
        { product, quantity: newQuantity },
      ]);
    }
  };

  const updateQuantity = (item, quantity) => {
    setShoppingCart(
      shoppingCart
        .map((cartProduct) => {
          if (cartProduct.product.id === item.product.id) {
            const newQuantity = cartProduct.quantity + quantity;
            if (newQuantity <= 0) {
              removeFromCart(item.product);
              return null;
            }

            return {
              ...cartProduct,
              quantity: newQuantity,
            };
          } else {
            return cartProduct;
          }
        })
        .filter(Boolean)
    );
  };

  const handleDecrement = (item) => {
    if (!item) {
      if (newQuantity === 1) {
        return;
      }
      setNewQuantity(newQuantity - 1);
      return;
    }

    updateQuantity(item, -1);
  };

  const handleIncrement = (item) => {
    if (!item) {
      setNewQuantity(newQuantity + 1);
      return;
    }

    updateQuantity(item, 1);
  };

  const removeFromCart = (product) => {
    setShoppingCart(
      shoppingCart.filter(
        (cartProduct) => cartProduct.product.id !== product.id
      )
    );
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
        newQuantity,
        addToCart,
        clearCart,
        completePurchase,
        searchItems,
        removeFromCart,
        handleDecrement,
        handleIncrement,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
