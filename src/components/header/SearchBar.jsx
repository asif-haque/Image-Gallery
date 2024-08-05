import { useRef, useState } from "react";
import { useSearchTerm } from "../../contexts/SearchTerm";

function SearchBar() {
  const [value, setValue] = useState("");
  const { setSearchTerm } = useSearchTerm();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    value ? setSearchTerm(value) : setSearchTerm("self"); //i.e. my default term
  };

  return (
    <div className="h-[100px]">
      <div
        className={`flex justify-center items-center gap-1/4 fixed top-3 lg:top-5 left-1/2 -translate-x-1/2 z-10 bg-white py-2 px-3 rounded shadow`}
      >
        <button
          className="bg-zinc-900 text-white p-2 m-0 rounded flex items-center search-btns"
          onClick={() => {
            setSearchTerm("self");
            setValue("");
          }}
        >
          <span className="material-symbols-outlined">home</span>
        </button>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex justify-center items-center mx-3"
        >
          <input
            type="text"
            placeholder="Search..."
            className="border-solid border-b p-2 search-field focus:outline-none focus:border-black"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            ref={inputRef}
          />
        </form>
        <button
          className="bg-zinc-900 text-white p-2 m-0 rounded flex items-center search-btns"
          onClick={() => {
            setValue("");
            inputRef.current.focus();
          }}
        >
          <span className="material-symbols-outlined">backspace</span>
        </button>
        <button
          onClick={handleSubmit}
          className="bg-zinc-900 text-white p-2 ml-2 rounded flex items-center search-btns"
        >
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
