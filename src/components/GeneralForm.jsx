import '../styles/general-form.css'

export function GeneralForm() {

    return (
        <>
        <h2>General Form</h2>
        <div className="form">
            <div>
                <label>First Name:</label>
                <input type='text'></input>
            </div>
            <div>
                <label>Last Name:</label>
                <input type='text'></input>
            </div>
            <div>
                <label>Email:</label>
                <input type='email'></input>
            </div>
        </div>
        </>
    )
}