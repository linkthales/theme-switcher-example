import React, { useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Header from './components/Header';

import usePersistedState from './utils/usePersistedState';

import GlobalStyle from './styles/global';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light.title);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? dark.title : light.title);
  }, [setTheme, theme]);

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <Header toggleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
