export const Search = ({theme, setInputData, searchHandler}) => {

  function inputHandler(event) {
    setInputData(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchHandler();
    }
  };

  return (
    <div className={`my-8`}>
      <div className="w-full flex items-center relative">
        <input
          type="text"
          className={`${theme == 'dark' ? "bg-cardBlue shadow-blue-500/5 shadow-xl" : "bg-white shadow-lg"} w-full text-lg p-5 pl-4 rounded-2xl font-mono`}
          placeholder="Search for a GitHub Profile..."
          onChange={inputHandler}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={() => searchHandler}
          className="h-[80%] py-3 px-7 text-white font-bold rounded-xl bg-blue-600 absolute right-3 flex items-center justify-center"
        >
          Search
        </button>
      </div>
    </div>
  );
};
