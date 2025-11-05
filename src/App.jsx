
import { useState } from 'react'
import './App.css'
import UserState from './components/UserState'

function App() {
  
  return (
    <>
    <Furit />
      <UserState />
      <div> count this valur {sum ()}</div>
    </>
  )
}
function Furit (){
  return(
    <h1>Assalam u Alaikum</h1>
  )
}
function sum(){
  return(
    10+10
  )
}

export default App
