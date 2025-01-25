import Search from "../../components/Search";
import CategoryItem from "../../components/CategoryItem";
import Container from "../../components/Container";
import Imagen_Portada_recorte from '../../components/Assets/Imagen_Portada_recorte.png'

const Landing = () => {
  return (
    <Container>
      <Search />
      <div className="flex flex-wrap justify-center items-center gap-4 my-4">
        <CategoryItem />
        <CategoryItem />
      </div>
      <div className="mt-10">
         <h1 className="py-10 px-10 text-brown text-2xl md:text-4xl text-center font-sans">Be distinct, be yourself</h1>
      </div>
      <div className="mt-20">
         <img src={Imagen_Portada_recorte} alt="Imagen_Portada_recorte" className="w-full h-[325px] object-cover"/>
      </div>
      <div className="mt-20 mb-10">
        <h1 className="py-10 px-10 text-brown text-2xl md:text-4xl text-center font-sans">What to expect from our stores</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">Menswear</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              If you are out for the latest menswear featuring the trending
              styles and fashion, you will get all that in one place: QR share
              pro.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Women's clothing</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              From the trending ladies’ fashions to quality pieces you’ve been
              searching, rest assured we’ve got you covered.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Children's clothes</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our stores feature a wide range of children and baby clothing with
              over 300 brands.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="w-40 h-12 rounded-full border border-gray-500 text-gray-700 font-medium text-lg 
         hover:bg-gray-100 focus:outline-none active:bg-blue-500 active:text-white">
            Our Offering
          </button>
        </div>
    </Container>
  );
};

export default Landing;
