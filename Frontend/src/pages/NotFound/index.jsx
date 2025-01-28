import Button from "../../components/Button";
import Container from "../../components/Container";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <Container>
      <h2 className="text-3xl font-sans font-bold text-[#8a7560] mb-5">
        404 - Page not found
      </h2>
      <p className="text-[#181411] font-sans font-semibold text-lg mb-5">
        The page you are looking for does not exist.
      </p>
      <Link to="/">
        <Button>Go back home</Button>
      </Link>
    </Container>
  );
};

export default NotFound;
