import { useContext } from "react";
import Container from "../../components/Container";
import SummaryContainer from "../../components/SummaryContainer";
import Button from "../../components/Button";
import { GlobalContext } from "../../context/Context";
import { Link } from "react-router";

export const HistoryPage = () => {
  const { purchased } = useContext(GlobalContext);

  return (
    <Container>
      <h2 className="text-2xl font-bold text-black mb-10">
        Historial de compras
      </h2>

      {purchased.length > 0 ? (
        purchased.map((item, index) => (
          <SummaryContainer key={index} compra={item} />
        ))
      ) : (
        <article className="text-center">
          <p className="mb-6">No hay compras</p>
          <Link to="/">
            <Button>volver al inicio</Button>
          </Link>
        </article>
      )}
    </Container>
  );
};

export default HistoryPage;
