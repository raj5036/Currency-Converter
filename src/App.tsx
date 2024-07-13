import React from 'react'
import Header from './components/Header/Header'
import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import ColorModeContext from './utils/Context';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import { AppStyles } from './AppStyles';
import Theme from './utils/Theme';


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
          <AppStyles.Container>
            <CurrencyConverter/>
          </AppStyles.Container>
        </React.Fragment>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
