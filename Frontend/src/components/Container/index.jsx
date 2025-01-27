const Container = ({ children }) => {
  return (
    <section className="flex grow flex-col p-5 max-w-screen-xl self-center">
      {children}
    </section>
  );
};

export default Container;
