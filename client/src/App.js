import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import { ThemeSize } from "../src/components/styles/Responsive";
import { Route, Routes } from "react-router-dom";
import {Navbar} from "./components/navbar/index";

// pages
import { HomeP } from "./pages/Homepage";
import { TTDashboard } from "./pages/TTDashboard";
import Register  from "./pages/Register";
import Login  from "./pages/Login";

function App() {
  return (
    <>
      <ThemeProvider theme={ThemeSize}>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeP />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ttdashboard" element={<TTDashboard />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
