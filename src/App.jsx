import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Store from './Store'
import products from "./products"

function App() {

  return (
    <>
      <Store products={products} />
    </>
  )
}

export default App
