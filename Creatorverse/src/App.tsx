import { useState, useEffect } from 'react'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import AddCreator from './components/pages/AddCreator'
import EditCreator from './components/pages/EditCreator'
import ViewCreator from './components/pages/ViewCreator'
import ShowCreators from './components/pages/ShowCreators'
import Form from './components/form/Form.tsx'
import './App.css'

function App() {
  
  
  return(
    <div>
      <Header />
      <Form />
      <Footer />
    </div>
  )
}

export default App
