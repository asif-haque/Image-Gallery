import { useState } from "react";
import { useSearchTerm } from "../contexts/SearchTerm";

function SearchBar() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);

  const [value, setValue] = useState();
  const { setSearchTerm } = useSearchTerm();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.length == 0) {
      setSearchTerm("self");
    } else setSearchTerm(value);
  };
  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex justify-center items-center my-5"
      >
        <input
          type="text"
          placeholder="Search for image..."
          className="border-solid border-b p-2 mx-3"
          style={{ width: "25%" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-gray-900 text-white p-2 m-0 rounded flex items-center search"
        >
          <span class="material-symbols-outlined">search</span>
        </button>
      </form>
    </>
  );
}

export default SearchBar;
