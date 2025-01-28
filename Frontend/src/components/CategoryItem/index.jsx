import { Link } from "react-router";

const CategoryItem = ({ category }) => {
  return (
    <Link
      className="text-[#181411] font-bold font-sans text-lg bg-[#f5f2f0] py-1 px-3 rounded-xl hover:scale-105 transition-transform duration-200 hover:font-semibold hover:bg-[#ded4cd]"
      to={`/${category.nombre}`}
    >
      <h3 className="mb-3 capitalize">{category.nombre}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">
        {category.descripcion}
      </p>
    </Link>
  );
};

export default CategoryItem;
