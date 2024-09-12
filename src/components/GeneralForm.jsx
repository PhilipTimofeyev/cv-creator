import '../styles/general-form.css';
import { useRef } from 'react'
import { useState } from 'react'

export function GeneralForm({ onSubmit, person}) {
    const firstName = useRef('')
    const lastName = useRef('')
    const email = useRef('')
    const phone = useRef('')

    const [firstNameInputValue, setFirstNameInputValue] = useState('');
    const [lastNameInputValue, setLastNameInputValue] = useState('');
    const [emailInputValue, setEmailInputValue] = useState('');
    const [phoneInputValue, setPhoneInputValue] = useState('');

    const handleFirstNameChange = (event) => setFirstNameInputValue(event.target.value)
    const handleLastNameChange = (event) => setLastNameInputValue(event.target.value)
    const handleEmailChange = (event) => setEmailInputValue(event.target.value)
    const handlePhoneChange = (event) => setPhoneInputValue(event.target.value)


    const handleEditClick = () => {
        setFirstNameInputValue(person.firstName)
        setLastNameInputValue(person.lastName)
        setEmailInputValue(person.email)
        setPhoneInputValue(person.phone)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const generalInfo = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            phone: phone.current.value
            
        }
        resetGeneralForm()
        onSubmit(generalInfo);
    }

    const resetGeneralForm = () => {
        setFirstNameInputValue("")
        setLastNameInputValue("")
        setEmailInputValue("")
        setPhoneInputValue("")
    }

    return (
        <>
        <h2>General</h2>
        <form onSubmit={handleSubmit} className="form">
            <div>
                <label>First Name:</label>
                <input
                    value={firstNameInputValue} onChange={handleFirstNameChange}
                    type='text'
                    ref={firstName}
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
            <div>
                <label>Phone Number:</label>
                <input
                    value={phoneInputValue} onChange={handlePhoneChange}
                    type='text'
                    ref={phone}
                />
            </div>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleEditClick}>Edit</button>
        </form>
        </>
    )
}