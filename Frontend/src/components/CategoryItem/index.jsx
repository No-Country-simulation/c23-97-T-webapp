import { Link } from "react-router";

const CategoryItem = ({ category }) => {
  return (
    <Link
      className="text-[#181411] font-sans text-lg bg-[#f5f2f0] py-3 px-5 rounded-xl hover:scale-105 transition-transform duration-200 hover:bg-[#ded4cd]"
      to={`/${category.encabezado}`}
    >
      <h3 className="mb-3 capitalize font-bold">{category.encabezado}</h3>
      <p className="text-base leading-relaxed font-base">{category.cuerpo}</p>
    </Link>
  );
};

export default CategoryItem;
