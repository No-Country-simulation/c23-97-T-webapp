import { useContext } from "react";
import CategoryItem from "../../components/CategoryItem";
import Container from "../../components/Container";
import Imagen_Portada_recorte from "../../components/Assets/Imagen_Portada_recorte.png";
import chaqueta_gris_c0gqt6 from "../../components/Assets/chaqueta_gris_c0gqt6.png";
import { GlobalContext } from "../../context/Context";
//import { Card } from "../../components/Card/Card";

const Landing = () => {
  const { categories } = useContext(GlobalContext);

  return (
    <Container>
      <div className="mt-10">
        <h2 className="py-10 px-10 text-brown text-2xl md:text-4xl text-center font-sans">
          Be distinct, be yourself
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
          What to expect from our stores
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-52">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>

      {/* Card para ver como se ve y despues borrar */}
      <div className="bg-[#f5f2f0] rounded-lg overflow-hidden shadow-md border border-gray-300 max-w-sm">
        <div className="relative h-40">
          <img
            className="w-full h-full object-cover object-center rounded-[2rem]" // Redondeado con radio mayor
            src={chaqueta_gris_c0gqt6}
            alt="foto"
          />
          <div className="absolute inset-0 border-8 border-white/80 rounded-[2rem]"></div>{" "}
          {/* Borde con radio mayor */}
        </div>
        <div className="p-4">
          <h3 className="text-[#181411] font-bold text-lg mb-2">
            Chaqueta de lana gris claro con corte clásico para mujer
          </h3>
          <p className="text-[#181411] text-sm mb-3">
            Chaqueta de lana elegante con corte entallado, perfecta para ocasiones
            formales. Su color neutro combina con cualquier atuendo.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-[#8a7560] font-semibold text-lg">$129.99</span>
            <button className="bg-[#8a7560] text-white px-4 py-2 rounded-md hover:bg-[#6e5b48] transition">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Landing;
