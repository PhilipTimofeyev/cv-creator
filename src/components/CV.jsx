
export function CV({ 
                    person: { firstName, lastName, email, phone }, 
                    education: { schoolName, titleOfStudy, dateOfStudy }, 
                    experience: { company, position, responsibilities, dateFrom, dateTo } 
                }) {
    return (
    <div className="cv-container">
        <h1>{firstName} {lastName}</h1>
        <div className="general">
            <p>{email}</p>
            <p>{phone}</p>
        </div>
        <div className="education">
            <h1>Education</h1>
            <h4>School Name</h4>
            <p>{schoolName}</p>
            <h4>Title of Study</h4>
            <p>{titleOfStudy}</p>
            <h4>Date of Study</h4>
            <p>{dateOfStudy}</p>
        </div>
        <div className="experience">
            <h1>Experience</h1>
            <h4>Company</h4>
            <p>{company}</p>
            <h4>Position</h4>
            <p>{position}</p>
            <h4>Responsibilities</h4>
            <p>{responsibilities}</p>
            <h4>Date From</h4>
            <p>{dateFrom}</p>
            <h4>Date To</h4>
            <p>{dateTo}</p>
        </div>
    </div>
    )
}