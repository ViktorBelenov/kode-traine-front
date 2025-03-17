
import { JSX } from 'react'
import Search from '../components/search/search'
import MainContent from '../components/main-content/main-content'


function MainPage():JSX.Element {


    return (
      <>
        <Search />
        <MainContent />
      </>
    )
  }
  
  export default MainPage;