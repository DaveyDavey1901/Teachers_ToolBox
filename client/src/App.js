import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { ThemeSize } from "../src/components/styles/Responsive";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import { HomeP } from "./pages/Homepage";
import { TTDashboard } from "./pages/TTDashboard";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";




function App() {
  return (
    <>
      <ThemeProvider theme={ThemeSize}>
        <BrowserRouter>
          <GlobalStyles />
          <Routes>
            <Route path="/*" element={<HomeP />} />
            <Route path="/ttdashboard" element={<TTDashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
