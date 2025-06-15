import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddCreator from './components/pages/AddCreator'
import EditCreator from './components/pages/EditCreator'
import ViewCreator from './components/pages/ViewCreator'
import ShowCreators from './components/pages/ShowCreators'
import {supabase} from './client.ts';
import './App.css'
import { createClient } from '@supabase/supabase-js'

function App() {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() =>{
    //run after every render
    const fetchData = async () => {
      const {data, error} = await supabase.from("influencers").select();
    if (error){
      console.error('Error fetching data from the database:', error.message);
      setError(error);
    }else{
      setData(data || []);
    }
  };
  fetchData();  
  }, []  
);
  
  return(
    <div>
      <ViewCreator id = {2} />
    </div>
  )
}

export default App
