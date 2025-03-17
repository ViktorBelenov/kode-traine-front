import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from "./pages/main-page"
import PeopleInfo from "./pages/people-info"

import ROUTES from './const';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainPage />} />
        <Route path={ROUTES.PERSON} element={<PeopleInfo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
