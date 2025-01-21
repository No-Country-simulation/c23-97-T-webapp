const Search = () => {
  return (
    <label className="w-full flex items-center gap-3 bg-[#f5f2f0] rounded-lg px-2 py-2 border-2 has-[:focus-visible]:border-[#8a7560]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="#8a7560"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
      <input
        className="w-full text-base font-medium font-sans bg-transparent placeholder:text-[#8a7560]/50 outline-none"
        type="text"
        placeholder="Buscar por producto"
      />
    </label>
  );
};

export default Search;
