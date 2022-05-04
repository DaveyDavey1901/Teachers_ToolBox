import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { ThemeSize } from "../src/components/styles/Responsive";
import { Route, Routes } from "react-router-dom";
import {Navbar} from "./components/navbar/index";

// pages
import { HomeP } from "./pages/Homepage";
import { TTDashboard } from "./pages/TTDashboard";
// form box holds the login / signup and contact forms
import {FormBoxFile } from "./components/formBoxFile/index";

function App() {
  return (
    <>
      <ThemeProvider theme={ThemeSize}>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeP />} />
          <Route path="/login" element={<FormBoxFile />} />
          <Route path="/register" element={<FormBoxFile />} />
          <Route path="/contact" element={<FormBoxFile />} />
          <Route path="/ttdashboard" element={<TTDashboard />} />
       </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
