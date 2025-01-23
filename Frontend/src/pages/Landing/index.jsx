import Search from "../../components/Search";
import CategoryItem from "../../components/CategoryItem";

const Landing = () => {
  return (
    <section className="flex flex-col p-5">
      <Search />
      <div className="flex flex-wrap justify-center items-center gap-4 my-4">
        <CategoryItem />
        <CategoryItem />
      </div>
    </section>
  );
};

export default Landing;
