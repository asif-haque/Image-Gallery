import { createContext, useContext, useState } from "react";

export const ShowContext = createContext(null);

export const ShowProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <ShowContext.Provider value={{ show, setShow }}>
      {children}
    </ShowContext.Provider>
  );
};

export const useShow = () => {
  return useContext(ShowContext);
};
