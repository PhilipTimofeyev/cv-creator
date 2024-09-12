import '../styles/general-form.css';
import { useRef } from 'react'

export function GeneralForm({onSubmit}) {
    const firstName = useRef('')
    const lastName = useRef('')
    const email = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const generalInfo = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value
        }
        onSubmit(generalInfo);
    }

    return (
        <>
        <h2>General Form</h2>
        <form onSubmit={handleSubmit} className="form">
            <div>
                <label>First Name:</label>
                <input
                    type='text'
                    ref={firstName}
                 />
            </div>
            <div>
                <label>Last Name:</label>
                <input
                    type='text'
                    ref={lastName}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type='text'
                    ref={email}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}