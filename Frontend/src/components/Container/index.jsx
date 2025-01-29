const Container = ({ children }) => {
  return (
    <section className="flex grow flex-col p-5 mb-52 max-w-screen-xl self-center items-center">
      {children}
    </section>
  );
};

export default Container;
