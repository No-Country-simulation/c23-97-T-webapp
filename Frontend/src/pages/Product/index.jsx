import Code from "../../components/Code";
import Container from "../../components/Container";

const Product = () => {
  const url = window.location.href;

  return (
    <Container>
      <article className="grid grid-cols-2 gap-4 items-center md:justify-items-center md:items-start">
        <img
          className="w-full max-w-96 rounded-md col-start-1 row-start-1 md:row-end-3"
          src="https://cdn.usegalileo.ai/sdxl10/979838a9-b799-478b-b3cb-69109ca6430e.png"
          alt="ropa"
        />

        <div className="flex flex-col gap-4 col-start-1 row-start-2 col-end-3 md:col-start-2 md:row-start-1">
          <h2 className="font-sans text-[#8a7560] font-medium text-3xl ">
            camiseta
          </h2>
          <p>
            esta es una camiseta que Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sed facere dolorum debitis cupiditate consequuntur
            illum ut earum voluptate veniam quis quibusdam blanditiis numquam
            magnam nulla, quisquam distinctio quos ea ad! Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Voluptates laborum delectus
            officia officiis, neque suscipit repudiandae assumenda maiores quas
            reiciendis! Impedit, laudantium. Nostrum et, iusto nisi placeat
            ipsam iure voluptates?
          </p>
          <span>$100.00</span>
          <button>Add to cart</button>
        </div>

        <Code url={url} />
      </article>
    </Container>
  );
};

export default Product;
