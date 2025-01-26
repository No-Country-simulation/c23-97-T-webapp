import { Link } from "react-router";

const CategoryItem = ({ category }) => {
  return (
    <Link
      className="text-[#181411] font-medium font-sans text-lg bg-[#f5f2f0] py-1 px-3 rounded-full hover:scale-105 transition-transform duration-200 hover:font-semibold hover:bg-[#ded4cd]"
      to="/"
    >
      {category}
    </Link>
  );
};

export default CategoryItem;
