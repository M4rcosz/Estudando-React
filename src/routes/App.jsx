import { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function App() {

  return (
    <>
      <Header />
      <button ><Link to={"page2"}>Página 2</Link></button>

    </>
  )
}

