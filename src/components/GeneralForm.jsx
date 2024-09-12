import '../styles/general-form.css';
import { useRef } from 'react'
import { useState } from 'react'

export function GeneralForm({ onSubmit, person}) {
     const firstName = useRef('')
     const lastName = useRef('')
     const email = useRef('')

    const [firstNameInputValue, setFirstNameInputValue] = useState('');
    const [lastNameInputValue, setLastNameInputValue] = useState('');
    const [emailInputValue, setEmailInputValue] = useState('');

    const handleFirstNameChange = (event) => setFirstNameInputValue(event.target.value)
    const handleLastNameChange = (event) => setLastNameInputValue(event.target.value)
    const handleEmailChange = (event) => setEmailInputValue(event.target.value)


    const handleEditClick = () => {
        setFirstNameInputValue(person.firstName)
        setLastNameInputValue(person.lastName)
        setEmailInputValue(person.email)
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const generalInfo = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value
        }
        resetGeneralForm()
        onSubmit(generalInfo);
    }

    const resetGeneralForm = () => {
        setFirstNameInputValue("")
        setLastNameInputValue("")
        setEmailInputValue("")
    }

    return (
        <>
        <h2>General Form</h2>
        <form onSubmit={handleSubmit} className="form">
            <div>
                <label>First Name:</label>
                <input
                    value={firstNameInputValue} onChange={handleFirstNameChange}
                    type='text'
                    ref={firstName}
                    // onChange={handleChange}
                 />
            </div>
            <div>
                <label>Last Name:</label>
                <input
                    value={lastNameInputValue} onChange={handleLastNameChange}
                    type='text'
                    ref={lastName}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    value={emailInputValue} onChange={handleEmailChange}
                    type='text'
                    ref={email}
                />
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleEditClick}>Edit</button>
        </form>
        </>
    )
}