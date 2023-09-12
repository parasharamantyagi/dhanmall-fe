import { createTheme, ThemeProvider } from "@mui/material/styles";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
const theme = createTheme({
  palette: {
    primary: {
      main: '#0884c7',
    },
    secondary: {
      light: '#0066ff',
      main: '#F3F3F3',
      contrastText: '#ffcc00',
    },
    error: {
      main: '#C8220E',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontSize: 14,
    fontFamily: '"Helvetica Neue"',
    body1: {
      fontSize: 14,
      fontFamily: '"Helvetica Neue"',
      color: '#5C6878',
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    body2: {
      fontSize: 16,
      fontFamily: '"Helvetica Neue"',
      color: '#5C6878',
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
    body3: {
      fontSize: 14,
      fontFamily: '"Helvetica Neue"',
      color: '#5C6878',
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
    body4: {
      fontSize: 16,
      fontFamily: '"Helvetica Neue"',
      color: '#5C6878',
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    subtitle1: {
      fontSize: 16,
      fontFamily: '"Helvetica Neue"',
      color: '#1C2A39',
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    h1: {
      color: '#1C2A39',
      fontFamily: '"Helvetica Neue"',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: '20px',
    },
    h2: {
      color: '#1C2A39',
      fontFamily: '"Helvetica Neue"',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 14,
    },
    h3: {
      color: '#1C2A39',
      fontFamily: '"Helvetica Neue"',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 14,
    },
    h4: {
      color: '#1C2A39',
      fontFamily: '"Helvetica Neue"',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 24,
    },
    h5: {
      color: '#1C2A39',
      fontFamily: '"Helvetica Neue"',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 20,
    },
    h7: {
      color: '#1C2A39',
      fontFamily: '"Helvetica Neue"',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 20,
    },
    headerTitle: {
      color: '#5C6878',
      fontFamily: '"Helvetica Neue"',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 18,
    },
    headerMainTitle: {
      color: '#5C6878',
      fontFamily: '"Helvetica Neue"',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 20,
    },
  },
});
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
