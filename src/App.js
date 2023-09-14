import { createTheme, ThemeProvider } from '@mui/material/styles';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
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
      contrastText: '#fff',
    },
    success: {
      main: '#4caf50',
      contrastText: '#fff',
    },
    info: {
      main: '#ffcc00',
      contrastText: '#fff',
    },
    purple: {
      main: '#9c27b0',
      contrastText: '#fff',
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
      color: '#000',
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    body2: {
      fontSize: 16,
      fontFamily: '"Helvetica Neue"',
      color: '#000',
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    body3: {
      fontSize: 14,
      fontFamily: '"Helvetica Neue"',
      color: '#000',
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
    body4: {
      fontSize: 16,
      fontFamily: '"Helvetica Neue"',
      color: '#000',
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
      fontSize: 24,
    },
    h2: {
      color: '#1C2A39',
      fontFamily: '"Helvetica Neue"',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 20,
    },
    h3: {
      color: '#1C2A39',
      fontFamily: '"Helvetica Neue"',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 18,
    },
    h4: {
      color: '#1C2A39',
      fontFamily: '"Helvetica Neue"',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: '20px',
    },
    h5: {
      color: '#1C2A39',
      fontFamily: '"Helvetica Neue"',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 14,
    },
    h6: {
      color: '#1C2A39',
      fontFamily: '"Helvetica Neue"',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 12,
    },

    p1: {
      color: '#1C2A39',
      fontFamily: '"Helvetica Neue"',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 24,
    },
    p2: {
      color: '#1C2A39',
      fontFamily: '"Helvetica Neue"',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 20,
    },
    p3: {
      color: '#1C2A39',
      fontFamily: '"Helvetica Neue"',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 18,
    },
    p4: {
      color: '#1C2A39',
      fontFamily: '"Helvetica Neue"',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 16,
      lineHeight: '20px',
    },
    p5: {
      color: '#1C2A39',
      fontFamily: '"Helvetica Neue"',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 14,
    },
    p6: {
      color: '#1C2A39',
      fontFamily: '"Helvetica Neue"',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 12,
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
    button: {
      textTransform: 'capitalize',
      fontFamily: '"Helvetica Neue"',
      fontStyle: 'normal',
      fontWeight: '500',
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
