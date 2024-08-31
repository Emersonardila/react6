import { useState } from 'react'
import './index.css'
import Form from './components/Form'
import { CurrentUserContext } from './context/CurrentUserContext'

function App() {
  const [currentUser, setCurrentUser] = useState({ name: "" })
  

  
  return (
    <>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Form/>
    </CurrentUserContext.Provider>

   
    </>
  )
}

export default App
