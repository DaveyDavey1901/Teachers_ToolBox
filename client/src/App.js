import GlobalStyles from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { ThemeSize } from "./styles/Responsive";
import {HomeP} from "../src/pages/Home";

function App() {
  return (
    <>
    <ThemeProvider theme={ThemeSize}>
      <GlobalStyles />
      <HomeP />
    </ThemeProvider>
    </>
  );
}

export default App;
