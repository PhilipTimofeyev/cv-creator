import { useState } from 'react'
import './components/GeneralForm.jsx'
import './App.css'
import { GeneralForm } from './components/GeneralForm.jsx'
import { EducationForm } from './components/EducationForm.jsx'
import { ExperienceForm } from './components/ExperienceForm.jsx'
import { CV } from './components/CV.jsx'


export default function MyApp() {

  const [person, setPerson] = useState({
    firstName: 'Harry',
    lastName: 'Potter',
    email: 'harrypotter@hogwarts.com',
    phone: '555-123-4567'
  });

  const [education, setEducation] = useState({
    schoolName: 'Hogwarts',
    titleOfStudy: 'Wizardry',
    dateOfStudy: '1991-09-12',
  });

  const [experience, setExperience] = useState({
    company: 'Ministry of Magic',
    position: 'Auror',
    responsibilities: 'Investigate crimes of the dark arts, apprehend dark wizards and witches.',
    dateFrom: '1995-05-26',
    dateTo: '1998-03-12',
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
