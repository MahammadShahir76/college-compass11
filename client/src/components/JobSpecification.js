import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './JobSpecification.css'


function JobSpecification() {

    const [jobtitle, setjobtitle] = useState('')
    const [department, setdepartment] = useState('')
    const [requiredskill, setrequiredskill] = useState('')
    const [education, seteducation] = useState('')
    const [yoexperience, setyoexperience] = useState('')
    const [jobdescription, setjobdescription] = useState('')
    const [preferedskill, setpreferedskill] = useState('')
    const [Error, setError] = useState(false)

    const navigate = useNavigate();

    const addjobspecification = async () => {
        if (!jobtitle || !department || !requiredskill || !education || !yoexperience || !jobdescription || !preferedskill) {
            setError(true)
            return false;
        }
        const userId = JSON.parse(localStorage.getItem("User"))._id;

        let result = await fetch("http://localhost:5000/add-jobspecification", {
            method: "post",
            body: JSON.stringify({ jobtitle, department, requiredskill, education, yoexperience, jobdescription, preferedskill, userId }),
            headers: { "Content-type": "application/json" }
        })
        result = await result.json();
        navigate("/")
    }

    return (
      <div className='mainee2'>
        <div className='Job-spec'>
            <h1 className='Job-spec-h1'>Job Specification</h1>
            <div className="container">
                <div className="input-container">
                    <img src="./pics/Building.png" alt="" />
                    <input type='text' placeholder='Enter job title' onChange={(e) => setjobtitle(e.target.value)} value={jobtitle} />
                    {Error && !jobtitle && <span className="error-message">Enter valid job title</span>}
                </div>

                <div className="input-container">
                    <img src="./pics/Factory.png" alt="" />
                    <input type='text' placeholder='Enter department' onChange={(e) => setdepartment(e.target.value)} value={department} />
                    {Error && !department && <span className="error-message">Enter valid department</span>}
                </div>

                <div className="input-container">
                    <img src="./pics/Location.png" alt="" />
                    <input type='text' placeholder='required skillst' onChange={(e) => setrequiredskill(e.target.value)} value={requiredskill} />
                    {Error && !requiredskill && <span className="error-message">Enter valid required skill</span>}
                </div>

                <div className="input-container">
                    <img src="./pics/Website.png" alt="" />
                    <input type='text' placeholder='Enter education' onChange={(e) => seteducation(e.target.value)} value={education} />
                    {Error && !education && <span className="error-message">Enter valid education</span>}
                </div>

                <div className="input-container">
                    <img src="./pics/Certificate.png" alt="" />
                    <input type='number' placeholder='Enter minimum years of experience' onChange={(e) => setyoexperience(e.target.value)} value={yoexperience} />
                    {Error && !yoexperience && <span className="error-message">Enter valid years of experience</span>}
                </div>

                <div className="input-container">
                    <img src="./pics/Phone Contact.png" alt="" />
                    <input type='text' placeholder='Enter job description' onChange={(e) => setjobdescription(e.target.value)} value={jobdescription} />
                    {Error && !jobdescription && <span className="error-message">Enter valid job description</span>}
                </div>

                <div className="input-container">
                    <img src="./pics/Submit Resume.png" alt="" />
                    <input type='text' placeholder='Enter prefered skills' onChange={(e) => setpreferedskill(e.target.value)} value={preferedskill} />
                    {Error && !preferedskill && <span className="error-message">Enter valid prefered skill</span>}
                </div>
<div className="JobSpecBtn">
                <button type='button' onClick={addjobspecification}>Add</button>
                <button><Link to="/AddCompanyCandidate" className='no-underline'>Next</Link></button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default JobSpecification
