import "./App.css";
import { Global, ThemeProvider } from "@emotion/react";
import { theme } from "@styles/theme";
import GlobalStyle from "@styles/global";
import Main from "@pages/main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <Main />
    </ThemeProvider>
  );
}

export default App;
