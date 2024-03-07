import { useRef, useState } from "react";
import { useSearchTerm } from "../contexts/SearchTerm";

function SearchBar() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);

  const [value, setValue] = useState("");
  const { setSearchTerm } = useSearchTerm();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    value ? setSearchTerm(value) : setSearchTerm("self"); //i.e. my default term
  };
  return (
    <div className="flex justify-center items-center gap-1/4">
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
        className="flex justify-center items-center my-5 mx-3"
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
        className="bg-zinc-900 text-white p-2 m-0 mx-2 rounded flex items-center search-btns"
      >
        <span className="material-symbols-outlined">search</span>
      </button>
    </div>
  );
}

export default SearchBar;
