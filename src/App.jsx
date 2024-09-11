import { useState } from 'react'
import './components/GeneralForm.jsx'
import './App.css'
import { GeneralForm } from './components/GeneralForm.jsx'


export default function MyApp() {
  return (
    <div className='main-container'>
      <h1> CV Creator</h1>
      <GeneralForm />
    </div>
  )
}
