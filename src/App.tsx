import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages/Pages"
import {  HelmetProvider } from 'react-helmet-async';


function App() {
  return (
    <div>
      <HelmetProvider>
    <BrowserRouter>
    <Pages />
    </BrowserRouter>
    </HelmetProvider>
    </div>
  );
}

export default App;
