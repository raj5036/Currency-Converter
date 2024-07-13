import React from 'react'
import Header from './components/Header/Header'
import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { amber, grey } from '@mui/material/colors';
import ColorModeContext from './utils/Context';
import CurrencyConverter from './components/CurrencyConverter/CurrencyConverter';
import { AppStyles } from './AppStyles';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: grey[700],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: grey,
          divider: grey[300],
          background: {
            default: grey[900],
            paper: grey[900],
          },
          text: {
            primary: grey[50],
            secondary: grey[500],
          },
        }),
  },
});

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
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

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
