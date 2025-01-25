const Container = ({ children }) => {
  return (
    <section className="flex flex-col p-5 max-w-screen-xl justify-self-center">
      {children}
    </section>
  );
};

export default Container;
