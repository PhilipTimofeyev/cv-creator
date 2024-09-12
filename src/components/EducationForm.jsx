import { useRef } from 'react'
import { useState } from 'react'

export function EducationForm({ onSubmit, education }) {
    const schoolName = useRef('')
    const titleOfStudy = useRef('')
    const dateOfStudy = useRef('')

    const [schoolNameInputValue, setSchoolNameInputValue] = useState('');
    const [titleOfStudyInputValue, setTitleOfStudyInputValue] = useState('');
    const [dateOfStudyInputValue, setDateOfStudyValue] = useState('');

    const handleSchoolNameChange = (event) => setSchoolNameInputValue(event.target.value)
    const handleTitleOfStudyChange = (event) => setTitleOfStudyInputValue(event.target.value)
    const handleDateOfStudyChange = (event) => setDateOfStudyValue(event.target.value)


    const handleEditClick = () => {
        setSchoolNameInputValue(education.schoolName)
        setTitleOfStudyInputValue(education.titleOfStudy)
        setDateOfStudyValue(education.dateOfStudy)
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const educationInfo = {
            schoolName: schoolName.current.value,
            titleOfStudy: titleOfStudy.current.value,
            dateOfStudy: dateOfStudy.current.value,

        }
        resetEducationForm()
        onSubmit(educationInfo);
    }

    const resetEducationForm = () => {
        setSchoolNameInputValue("")
        setTitleOfStudyInputValue("")
        setDateOfStudyValue("")
    }

    return (
        <>
            <h2>Education</h2>
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <label>School Name:</label>
                    <input
                        value={schoolNameInputValue} onChange={handleSchoolNameChange}
                        type='text'
                        ref={schoolName}
                    />
                </div>
                <div>
                    <label>Title of Study:</label>
                    <input
                        value={titleOfStudyInputValue} onChange={handleTitleOfStudyChange}
                        type='text'
                        ref={titleOfStudy}
                    />
                </div>
                <div>
                    <label>Date of Study:</label>
                    <input
                        value={dateOfStudyInputValue} onChange={handleDateOfStudyChange}
                        type='date'
                        ref={dateOfStudy}
                    />
                </div>
                <button type="submit">Submit</button>
                <button type="button" onClick={handleEditClick}>Edit</button>
            </form>
        </>
    )
}