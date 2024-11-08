import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faIndustry, faMapMarkerAlt, faLink, faClipboardCheck, faEnvelope, faIdCard } from '@fortawesome/free-solid-svg-icons';

import './CompanyInfo.css'; 

const CompanyInfo = () => {
    const [studentname, setstudentname] = useState('');
    const [branch, setbranch] = useState('');
    const [USN, setUSN] = useState('');
    const [currentYear, setcurrentYear] = useState('');
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const addCompanyinfo = async () => {
        if (!studentname || !branch || !USN || !currentYear) {
            setError(true);
            return false;
        }
        const userId = JSON.parse(localStorage.getItem("User"))._id;

        let result = await fetch("http://localhost:5000/company-info", {
            method: "post",
            body: JSON.stringify({ studentname, branch, USN, currentYear, userId }),
            headers: { "Content-type": "application/json" }
        });
        result = await result.json();
        //navigate("/");
    }

    return (
        <div className="company-info-container">
            <h2>Student Basic Details</h2>
            <Link to="/candidateDetails">See Aluminis from your college</Link>

            <div className="input-container">
                <FontAwesomeIcon icon={faBuilding} className="input-icon2" />
                <input type='text' placeholder='Enter Student Name' onChange={(e) => setstudentname(e.target.value)} value={studentname} />
                {error && !studentname && <span>Enter valid name</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faIndustry} className="input-icon2" />
                <input type='text' placeholder='Enter Student Branch' onChange={(e) => setbranch(e.target.value)} value={branch} />
                {error && !branch && <span>Enter valid branch</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon2" />
                <input type='text' placeholder='Enter USN' onChange={(e) => setUSN(e.target.value)} value={USN} />
                {error && !USN && <span>Enter valid USN</span>}
            </div>

            <div className="input-container">
                <FontAwesomeIcon icon={faLink} className="input-icon2" />
                <input type='number' placeholder='Enter Current Year of Studying' onChange={(e) => setcurrentYear(e.target.value)} value={currentYear} />
                {error && !currentYear && <span>Enter valid Current year</span>}
            </div>

            <div className="button-container">
                <button type='button' onClick={addCompanyinfo}>Submit</button>
                <Link to="/AddCompanyCandidate" className="next-link1">Next</Link>
                </div>
            </div>
    )
} 

export default CompanyInfo;
