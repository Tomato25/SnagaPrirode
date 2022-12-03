import { createContext,useState } from "react";

const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [toggle, setToggle] = useState(false);

  const toggler = (toggle) => {
    setToggle(!toggle);
    console.log(toggle)
};


  return (<MenuContext.Provider value={{toggle, toggler}}>{children}</MenuContext.Provider>);
}

export default MenuContext;
