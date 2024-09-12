import { GeneralForm } from '../components/GeneralForm.jsx'

export function CV({ person: { firstName, lastName, email, phone }, education: { schoolName, titleOfStudy, dateOfStudy} }) {
    return (
    <div className="cv-container">
        <h1>CV</h1>
        <div className="general">
            <p>{firstName} {lastName}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
        <div className="education">
            <h4>School Name</h4>
            <p>{schoolName}</p>
            <h4>Title of Study</h4>
            <p>{titleOfStudy}</p>
            <h4>Date of Study</h4>
            <p>{dateOfStudy}</p>
        </div>
    </div>
    )
}