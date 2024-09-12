import { useRef } from 'react'
import { useState } from 'react'

export function ExperienceForm({ onSubmit, experience}) {
    const company = useRef('')
    const position = useRef('')
    const responsibilities = useRef('')
    const dateFrom = useRef('')
    const dateTo = useRef('')

    const [companyInputValue, setCompanyInputValue] = useState('');
    const [positionInputValue, setPositionInputValue] = useState('');
    const [responsibilitiesInputValue, setResponsibilitiesInputValue] = useState('');
    const [dateFromInputValue, setdateFromInputValue] = useState('');
    const [dateToInputValue, setdateToInputValue] = useState('');

    const handleCompanyChange = (event) => setCompanyInputValue(event.target.value)
    const handlePositionChange = (event) => setPositionInputValue(event.target.value)
    const handleResponsibilitiesChange = (event) => setResponsibilitiesInputValue(event.target.value)
    const handleDateFromChange = (event) => setdateFromInputValue(event.target.value)
    const handleDateToChange = (event) => setdateToInputValue(event.target.value)


    const handleEditClick = () => {
        setCompanyInputValue(experience.company)
        setPositionInputValue(experience.position)
        setResponsibilitiesInputValue(experience.responsibilities)
        setdateFromInputValue(experience.dateFrom)
        setdateToInputValue(experience.dateTo)
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const experienceInfo = {
            company: company.current.value,
            position: position.current.value,
            responsibilities: responsibilities.current.value,
            dateFrom: dateFrom.current.value,
            dateTo: dateTo.current.value
        }
        resetExperienceForm()
        onSubmit(experienceInfo);
    }

    const resetExperienceForm = () => {
        setCompanyInputValue("")
        setPositionInputValue("")
        setResponsibilitiesInputValue("")
        setdateFromInputValue("")
        setdateToInputValue("")
    }

    return (
        <>
        <h2>Experience</h2>
        <form onSubmit={handleSubmit} className="form">
            <div>
                <label>Company:</label>
                <input
                    value={companyInputValue} onChange={handleCompanyChange}
                    type='text'
                    ref={company}
                 />
            </div>
            <div>
                <label>Position:</label>
                <input
                    value={positionInputValue} onChange={handlePositionChange}
                    type='text'
                    ref={position}
                />
            </div>
            <div>
                <label>Responsibilities:</label>
                <textarea
                        value={responsibilitiesInputValue} onChange={handleResponsibilitiesChange}
                    type='text'
                    ref={responsibilities}
                    className='text-area'
                />
            </div>
            <div>
                <label>Date From:</label>
                <input
                    value={dateFromInputValue} onChange={handleDateFromChange}
                    type='date'
                    ref={dateFrom}
                />
            </div>
            <div>
                <label>Date To:</label>
                <input
                    value={dateToInputValue} onChange={handleDateToChange}
                    type='date'
                    ref={dateTo}
                />
            </div>
            <div className='formBtns'>
                <button type="submit">Submit</button>
                <button type="button" onClick={handleEditClick}>Edit</button>
            </div>
        </form>
        </>
    )
}