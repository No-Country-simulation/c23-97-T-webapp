import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://apionline-a7w9.onrender.com/api/productos/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const categories = [
    {
      id: 1,
      nombre: "hombre",
      descripcion:
        "Si estás buscando las últimas prendas masculinas con estilos y modas en tendencia, encontrarás todo eso en un solo lugar: QR share pro.",
    },
    {
      id: 2,
      nombre: "mujer",
      descripcion:
        "Desde las modas femeninas en tendencia hasta las piezas de calidad que has estado buscando, ten la seguridad de que te tenemos cubierto.",
    },
    {
      id: 3,
      nombre: "niño",
      descripcion:
        "Nuestras tiendas cuentan con una amplia gama de ropa para niños y bebés con más de 300 marcas.",
    },
  ];

  return (
    <GlobalContext.Provider value={{ products, categories }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
