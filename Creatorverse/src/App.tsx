import { useState, useEffect } from 'react'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import AddCreator from './components/pages/AddCreator'
import EditCreator from './components/pages/EditCreator'
import ViewCreator from './components/pages/ViewCreator'
import ShowCreators from './components/pages/ShowCreators'
import {useRoutes} from 'react-router';
import Form from './components/form/Form.tsx'
import './App.css'
import DeleteCreator from './components/pages/DeleteCreator.tsx'

function App() {
  let element = useRoutes(
    [
      {
        path: "/",
        element: <ShowCreators />},
      {
        path: "/Creator/:id",
        element: <ViewCreator  />,
      },
      {path: "/NewInfluencer", element: <AddCreator />},
      {path: "/Edit/:id", element: <EditCreator/>},
      {path: "/Delete/:id", element: <DeleteCreator />},
    ]
  )
  
  return(
    <div>
      <Header />
      <div className='main'>
        {element}
      </div>
      <Footer />
    </div>
  )
}

export default App
