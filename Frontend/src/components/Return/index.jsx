import { Link } from "react-router";
import Button from "../Button";

const Return = ({ category }) => {
  return (
    <Link className="self-start mb-5" to={`/${category}`}>
      <Button primary={false}>Volver</Button>
    </Link>
  );
};

export default Return;
