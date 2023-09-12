import { createTheme, ThemeProvider } from "@mui/material/styles";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
const defaultTheme = createTheme();
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
