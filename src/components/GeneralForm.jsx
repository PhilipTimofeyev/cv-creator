import '../styles/general-form.css'
import { useRef } from 'react'

export function GeneralForm() {
    const firstName = useRef('')
    const lastName = useRef('')
    const email = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

    return (
        <>
        <h2>General Form</h2>
        <form onSubmit={handleSubmit} className="form">
            <div>
                <label>First Name:</label>
                <input
                 type='text'
                 onChange={(e) => (firstName.current = e.target.value)}
                 />
            </div>
            <div>
                <label>Last Name:</label>
                <input
                    type='text'
                    onChange={(e) => (lastName.current = e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type='text'
                    onChange={(e) => (email.current = e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}