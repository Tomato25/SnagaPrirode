import { createContext,useState, useEffect } from "react";

const ScreenSizeContext = createContext();


export function ScreenSizeProvider({ children }) {
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
      });
      const setDimension = () => {
        getDimension({
          dynamicWidth: window.innerWidth,
        })
      }
      
      useEffect(() => {
        window.addEventListener('resize', setDimension);
        
        return(() => {
            window.removeEventListener('resize', setDimension);
            console.log(screenSize)
        })
      }, [screenSize])
  
    return (<ScreenSizeContext.Provider value={{screenSize}}>{children}</ScreenSizeContext.Provider>);
  }
  
  export default ScreenSizeContext;
  