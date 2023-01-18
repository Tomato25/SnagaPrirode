import { createContext,useState } from "react";

const PageContext = createContext();

export function PageProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("");


  return (<PageContext.Provider value={{currentPage, setCurrentPage}}>{children}</PageContext.Provider>);
}

export default PageContext;
