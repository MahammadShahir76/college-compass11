import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AddCompanyCandidate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faUser, faEnvelope, faPhone, faBriefcase } from '@fortawesome/free-solid-svg-icons';

function AddCompanyCandidate() {
    const [applicantname, setapplicantname] = useState('');
    const [applicantemailid, setapplicantemailid] = useState('');
    const [applicantphoneno, setapplicantphoneno] = useState('');
    const [applicantDomain, setapplicantDomain] = useState('');
    const [Error, setError] = useState(false);

    const navigate = useNavigate();

    const addCompanyMembers = async () => {
        if (!applicantname || !applicantemailid || !applicantphoneno || !applicantDomain) {
            setError(true);
            return false;
        }
        const userId = JSON.parse(localStorage.getItem("User"))._id;

        let result = await fetch("http://localhost:5000/add-companycandiadte", {
            method: "post",
            body: JSON.stringify({ applicantname, applicantemailid, applicantphoneno, applicantDomain, userId }),
            headers: { "Content-type": "application/json" }
        });
        result = await result.json();
        // navigate("/") 
    }

    const resetForm = () => {
        setapplicantname('');
        setapplicantemailid('');
        setapplicantphoneno('');
        setapplicantDomain('');
        setError(false);
    }

    return (
        <div className="candidate-info-container2">
            <h1>Students personal info to Connect</h1>

            <div className="input-container">
                <FontAwesomeIcon icon={faBriefcase} className="input-icon3" />
                <input
                    type='text'
                    placeholder='Enter Your Interested Domain'
                    onChange={(e) => setapplicantDomain(e.target.value)}
                    value={applicantDomain}
                />
                {Error && !applicantDomain && <span>Enter valid domain</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faUser} className="input-icon3" />
                <input
                    type='text'
                    placeholder='Enter Your Name'
                    onChange={(e) => setapplicantname(e.target.value)}
                    value={applicantname}
                />
                {Error && !applicantname && <span>Enter valid name</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon3" />
                <input
                    type='text'
                    placeholder='Enter your email id to contact'
                    onChange={(e) => setapplicantemailid(e.target.value)}
                    value={applicantemailid}
                />
                {Error && !applicantemailid && <span>Enter valid emailid</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faPhone} className="input-icon3" />
                <input
                    type='number'
                    placeholder='Enter your phone number'
                    onChange={(e) => setapplicantphoneno(e.target.value)}
                    value={applicantphoneno}
                />
                {Error && !applicantphoneno && <span>Enter valid phone number</span>}
            </div>

            <div className="button-container">
                <button type='button' onClick={addCompanyMembers}>Add </button>
                {/* <button type='button' onClick={resetForm}>More</button> */}
                {/* <button className='Add-bulk'><Link to="/excel">Bulk</Link></button> */}
            </div>
            <Link to="/FinalCompanySubmission" className="next-link2">Submit</Link>

        </div>
    )
}

export default AddCompanyCandidate;
