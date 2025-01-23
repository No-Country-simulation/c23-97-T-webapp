import Search from "../../components/Search";
import CategoryItem from "../../components/CategoryItem";
import Container from "../../components/Container";

const Landing = () => {
  return (
    <Container>
      <Search />
      <div className="flex flex-wrap justify-center items-center gap-4 my-4">
        <CategoryItem />
        <CategoryItem />
      </div>
    </Container>
  );
};

export default Landing;
