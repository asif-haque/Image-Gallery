import { createContext, useContext, useState } from "react";

const SearchTermContext = createContext(null);

export const SearchTermProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("self");
  return (
    <SearchTermContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchTermContext.Provider>
  );
};

export const useSearchTerm = () => {
  return useContext(SearchTermContext);
};
