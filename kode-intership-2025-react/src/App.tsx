import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from "./pages/main-page"
import PeopleInfo from "./pages/people-info"

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/theme.ts';

import { useAppSelector } from './store/hooks.ts';


import ROUTES from './const';


function App() {

  const theme = useAppSelector((state) => state.theme.theme)

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === 'white' ? lightTheme : darkTheme}>
        <Routes>
          <Route path={ROUTES.HOME} element={<MainPage />} />
          <Route path={ROUTES.PERSON} element={<PeopleInfo />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
