import { Routes } from "./Routes";
import GlobalStyles from './styles/global';
import { ThemeProvider } from "styled-components";
import { THEME } from "./styles/themes";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyles />
      <Routes/>
    </ThemeProvider>
  );
}

export default App;
