import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddCreator from './components/pages/AddCreator'
import EditCreator from './components/pages/EditCreator'
import ViewCreator from './components/pages/ViewCreator'
import ShowCreators from './components/pages/ShowCreators'
import './App.css'

function App() {
  return(
    <div>
      <ShowCreators />
    </div>
  )
}

export default App
