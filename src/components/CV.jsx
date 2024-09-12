
export function CV({ 
                    person: { firstName, lastName, email, phone }, 
                    education: { schoolName, titleOfStudy, dateOfStudy }, 
                    experience: { company, position, responsibilities, dateFrom, dateTo } 
                }) {
    return (
    <div className="cv-container">
        <h1>{firstName} {lastName}</h1>
        <div className="general">
            <h2>Contact</h2>
            <h4>Email</h4>
            <p>{email}</p>
            <h4>Phone</h4>
            <p>{phone}</p>
        </div>
        <div className="education">
            <h2>Education</h2>
            <h4>School Name</h4>
            <p>{schoolName}</p>
            <h4>Title of Study</h4>
            <p>{titleOfStudy}</p>
            <h4>Date of Study</h4>
            <p>{dateOfStudy}</p>
        </div>
        <div className="experience">
            <h2>Experience</h2>
            <h4>Company</h4>
            <p>{company}</p>
            <h4>Position</h4>
            <p>{position}</p>
            <h4>Responsibilities</h4>
            <p>{responsibilities}</p>
            <h4>Dates</h4>
            <p>{dateFrom} - {dateTo}</p>
        </div>
    </div>
    )
}