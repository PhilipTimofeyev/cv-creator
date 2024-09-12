import { useState } from 'react'
import './components/GeneralForm.jsx'
import './App.css'
import { GeneralForm } from './components/GeneralForm.jsx'
import { CV } from './components/CV.jsx'


export default function MyApp() {

  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleFormSubmit = (data) => {
    setPerson(data)
  };


  return (
    <div className='main-container'>
      <h1> CV Creator</h1>
      <GeneralForm 
        onSubmit={handleFormSubmit} 
        person={person}
      />
      <CV person={person}/>
    </div>
  )
}
