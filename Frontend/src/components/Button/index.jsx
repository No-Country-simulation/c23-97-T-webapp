const Button = ({ children, primary = true }) => {
  const buttonStyle = [
    "font-sans font-medium text-lg px-4 py-2 rounded-md border-2 border-[#8a7560]",
    primary
      ? "bg-[#8a7560] text-[#f5f2f0] hover:bg-[#77634e]"
      : "bg-[#f5f2f0] text-[#8a7560] hover:bg-[#ded4cd]",
  ].join(" ");

  return <button className={buttonStyle}>{children}</button>;
};

export default Button;
