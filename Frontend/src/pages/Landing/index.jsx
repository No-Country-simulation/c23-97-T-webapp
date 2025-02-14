import { useContext } from "react";
import CategoryItem from "../../components/CategoryItem";
import Container from "../../components/Container";
import Imagen_Portada_recorte from "../../components/Assets/Imagen_Portada_recorte.png";
import { GlobalContext } from "../../context/Context";
//import { Card } from "../../components/Card/Card";

const Landing = () => {
  const { categories } = useContext(GlobalContext);

  return (
    <Container>
      <div className="mt-10">
        <h2 className="py-10 px-10 text-brown text-2xl md:text-4xl text-center font-sans">
          Sé distinto, sé tú mismo
        </h2>
      </div>
      <div className="mt-20">
        <img
          src={Imagen_Portada_recorte}
          alt="Imagen_Portada_recorte"
          className="w-full h-[325px] object-cover"
          sizes="(max-width: 600px) 320px, 
            (max-width: 900px) 640px, 
            960px"
        />
      </div>
      <div className="mt-20 mb-10">
        <h1 className="py-10 px-10 text-brown text-2xl md:text-4xl text-center font-sans">
          Qué esperar de nuestras tiendas
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </Container>
  );
};

export default Landing;
