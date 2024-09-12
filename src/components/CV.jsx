import { GeneralForm } from '../components/GeneralForm.jsx'

export function CV({person: {firstName, lastName, email}}) {
    return (
    <div className="cv-container">
        <h1>Resume</h1>
        <div className="general">
            <p>{firstName} {lastName}</p>
            <p>{email}</p>
        </div>
    </div>
    )
}