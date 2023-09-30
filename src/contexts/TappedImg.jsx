import { createContext, useContext, useState } from "react";

export const TappedImgContext = createContext(null);

export const TappedImgProvider = ({ children }) => {
  const [imgData, setImgData] = useState(null);

  return (
    <TappedImgContext.Provider value={{ imgData, setImgData }}>
      {children}
    </TappedImgContext.Provider>
  );
};

export const useTappedImg = () => {
  return useContext(TappedImgContext);
};
