import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import CustomLayout from './Components/CustomLayout/CustomLayout';
import MainRoutes from './Route/MainRoutes';
import { LocalizationProvider } from '@mui/x-date-pickers';
// import { CssBaseline, ThemeProvider, createTheme } from '@material-ui/core';
// import { StylesProvider } from '@material-ui/styles';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'


const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
    backgroundColor:'#FFFFFF'
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Your app content goes here */}
        <LocalizationProvider dateAdapter={AdapterMoment}>
        <div className="App">
          <MainRoutes></MainRoutes>
        </div>
        </LocalizationProvider>
      </ThemeProvider>
  );
}

export default App;
