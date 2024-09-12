import { useState } from 'react'
import './components/GeneralForm.jsx'
import './App.css'
import { GeneralForm } from './components/GeneralForm.jsx'
import { EducationForm } from './components/EducationForm.jsx'
import { ExperienceForm } from './components/ExperienceForm.jsx'
import { CV } from './components/CV.jsx'


export default function MyApp() {

  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const [education, setEducation] = useState({
    schoolName: '',
    titleOfStudy: '',
    dateOfStudy: '',
  });

  const [experience, setExperience] = useState({
    company: '',
    position: '',
    responsibilities: '',
    dateFrom: '',
    dateTo: '',
  });

  const handleGeneralSubmit = (data) => {
    setPerson(data)
  };

  const handleEducationSubmit = (data) => {
    setEducation(data)
  };

  const handleExperienceSubmit = (data) => {
    setExperience(data)
  };


  return (
    <div>
      <h1> CV Creator</h1>
      <div className='main-container'>
        <div className='form-container'>
        <GeneralForm 
          onSubmit={handleGeneralSubmit} 
          person={person}
        />
        <EducationForm
          onSubmit={handleEducationSubmit}
          education={education}
        />
        <ExperienceForm
          onSubmit={handleExperienceSubmit}
          experience={experience}
        />
        </div>
        <div class="cv">
          <CV person={person} education={education} experience={experience} />
        </div>
      </div>
    </div>
  )
}
