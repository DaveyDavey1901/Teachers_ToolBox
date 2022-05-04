import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { ThemeSize } from "../src/components/styles/Responsive";
import { Route, Routes } from "react-router-dom";
import {Navbar} from "./components/navbar/index";

// pages
import { HomeP } from "./pages/Homepage";
import { TTDashboard } from "./pages/TTDashboard";
import {AccountBox } from "./components/accountBox/index";

function App() {
  return (
    <>
      <ThemeProvider theme={ThemeSize}>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeP />} />
          <Route path="/login" element={<AccountBox />} />
          <Route path="/register" element={<AccountBox />} />
          <Route path="/ttdashboard" element={<TTDashboard />} />
       </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
