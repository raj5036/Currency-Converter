import React from 'react'
import Header from './components/Header/Header'
import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import ColorModeContext from './utils/Context';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import { AppStyles } from './AppStyles';
import Theme from './utils/Theme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [mode, setMode] = React.useState<PaletteMode>('dark');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(Theme(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <React.Fragment>
          <Header />
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en'>
            <AppStyles.Container>
              <CurrencyConverter/>
            </AppStyles.Container>
          </LocalizationProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            pauseOnHover
            theme={theme.palette.mode}
            transition= {Bounce}
          />
        </React.Fragment>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
