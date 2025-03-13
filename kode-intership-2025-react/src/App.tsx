// import { useState } from 'react'
import Search from './components/search/search'
import CardList from './components/card-list/card-list'
import Persons from './mock/persons';

function App() {


  return (
    <>
      <Search />
      <CardList persons={Persons}/>
    </>
  )
}

export default App
