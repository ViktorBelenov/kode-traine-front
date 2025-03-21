import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from "./pages/main-page"
import PeopleInfo from "./pages/people-info"

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/theme.ts';

import { useAppSelector, useAppDispatch } from './store/hooks.ts';


import ROUTES from './const';
import { GlobalStyle } from './style/global.ts';
import { setTheme } from './store/themeSlice.ts';
import { useEffect } from 'react';


function App() {


  const dispatch = useAppDispatch();

  useEffect(() => {
    const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if(!isDarkTheme){
      dispatch(setTheme('white'));
    } 

    const checkTheme = () => {
      const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if(!isDarkTheme){
        dispatch(setTheme('white'));
      } else {
        dispatch(setTheme('dark'))
      }
    };

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", checkTheme);

    return () => window.removeEventListener("change", checkTheme);
  }, [dispatch]);

  const theme = useAppSelector((state) => state.theme.theme)

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === 'white' ? lightTheme : darkTheme}>
        <GlobalStyle />
          <Routes>
            <Route path={ROUTES.HOME} element={<MainPage />} />
            <Route path={ROUTES.PERSON} element={<PeopleInfo />} />
          </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
