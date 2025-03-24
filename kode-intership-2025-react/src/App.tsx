import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from "./pages/main-page"
import PeopleInfo from "./pages/people-info"

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/theme.ts';

import { useAppSelector, useAppDispatch } from './store/hooks.ts';


import ROUTES from './const';
import { GlobalStyle } from './style/global.ts';
import { setLanguage, setTheme } from './store/utilitySlice.ts';
import { useEffect } from 'react';
import { setOnlineStatus, updateAfterOffline } from './store/peopleStorageSlice.ts';


function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleOnline = () => {
      dispatch(setOnlineStatus("loading"));
      dispatch(updateAfterOffline());
    };
  
    const handleOffline = () => {
      dispatch(setOnlineStatus("offline"));
    };
  
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
  
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [dispatch]);

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

  useEffect(() => {
    const language = navigator.language;
    if(language !== 'ru') {
      dispatch(setLanguage('eng'))
    }
  }, [dispatch]);
  
  const theme = useAppSelector((state) => state.utility.theme)

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
