import { useState, useMemo } from "react";
import { ThemeProvider as MaterialThemeProvider, createTheme } from '@mui/material/styles';
import { ColorModeContext } from "@/theme/context";

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MaterialThemeProvider theme={theme}>
        { children }
      </MaterialThemeProvider>
    </ColorModeContext.Provider>
  );
}
