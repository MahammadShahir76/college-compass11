import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import './CandidateInfo.css';

const CandidateInfo = () => {
    const [name, setname] = useState('');
    const [contact, setcontact] = useState('');
    const [graduationyear, setgraduationyear] = useState('');
    const [workingas, setworkingas] = useState('');
    const [experience, setexperience] = useState('');
    const [domain, setdomain] = useState('');
    const [specialisation, setspecialisation] = useState('');
    const [Error, setError] = useState(false);

    const navigate = useNavigate();

    const fields = [name, contact, graduationyear, workingas, experience, domain, specialisation];
    const filledFields = fields.filter(field => field !== '');
    const progressPercentage = Math.round((filledFields.length / fields.length) * 100);

    const addSenior = async () => {
        if (filledFields.length !== fields.length) {
            setError(true);
            return false;
        }
        const userId = JSON.parse(localStorage.getItem('User'))._id;

        let result = await fetch('http://localhost:5000/add-seniorInfo', {
            method: 'post',
            body: JSON.stringify({ name, contact, graduationyear, workingas, experience, domain, specialisation, userId }),
            headers: { 'Content-type': 'application/json' },
        });
        result = await result.json();
    };

    return (
        <div className="main-card">
        <div className="main-container">
            <div className="candidate-info-container">
                <h1>Alumni Profile 👨🏼‍💼</h1>

                <div className="blob blob1"></div>
                <div className="blob blob2"></div>
                <div className="blob blob3"></div>
                <div className="blob blob4"></div>

                {/* White background container for inputs */}
                <div className="form-container">
                    {/* Input fields */}
                    <div className='mainee4'>
                    <div className="input-container">
                        <FontAwesomeIcon icon={faUser} className="input-icon1" />
                        <input type="text" placeholder="Enter full name" onChange={(e) => setname(e.target.value)} value={name} />
                        {Error && !name && <span>Enter valid name</span>}
                    </div>
                    <div className="input-container">
                        <FontAwesomeIcon icon={faPhone} className="input-icon1" />
                        <input type="number" placeholder="Enter contact number" onChange={(e) => setcontact(e.target.value)} value={contact} />
                        {Error && !contact && <span>Enter valid number</span>}
                    </div>
                    <div className="input-container">
                        <FontAwesomeIcon icon={faGraduationCap} className="input-icon1" />
                        <input
                            type="date"
                            placeholder="Enter graduation date"
                            onChange={(e) => setgraduationyear(e.target.value)}
                            value={graduationyear}
                        />
                        {Error && !graduationyear && <span>Enter valid graduation date</span>}
                    </div>
                    <div className="input-container">
                        <FontAwesomeIcon icon={faBriefcase} className="input-icon1" />
                        <input type="text" placeholder="Currently Working as" onChange={(e) => setworkingas(e.target.value)} value={workingas} />
                        {Error && !workingas && <span>Enter valid working profile</span>}
                    </div>
                    <div className="input-container">
                        <FontAwesomeIcon icon={faBriefcase} className="input-icon1" />
                        <input type="number" placeholder="Enter number of experience" onChange={(e) => setexperience(e.target.value)} value={experience} />
                        {Error && !experience && <span>Enter valid experience</span>}
                    </div>
                    <div className="input-container">
                        <FontAwesomeIcon icon={faBriefcase} className="input-icon1" />
                        <input type="text" placeholder="Enter domain" onChange={(e) => setdomain(e.target.value)} value={domain} />
                        {Error && !domain && <span>Enter valid domain</span>}
                    </div>
                    <div className="input-container">
                        <FontAwesomeIcon icon={faGraduationCap} className="input-icon1" />
                        <input type="text" placeholder="Enter specialisation" onChange={(e) => setspecialisation(e.target.value)} value={specialisation} />
                        {Error && !specialisation && <span>Enter valid specialisation</span>}
                    </div>
                    </div>

                    <div className="button-container">
                        <button type="button" onClick={addSenior}>Add</button>
                        <button><Link to="/DomainSelection" className="next-link4">Next</Link></button>
                    </div>
                </div>
            </div>

            <div className="progress-container">
                <ProgressCircle percentage={progressPercentage} />
            </div>
        </div>
        </div>
    );
};

const ProgressCircle = ({ percentage }) => {
    return (
        <div className="progress-circle">
            <svg className="progress-ring" width="150" height="150">
                <circle
                    className="progress-ring__circle"
                    stroke="#4CAF50"
                    strokeWidth="10"
                    fill="transparent"
                    r="65"
                    cx="75"
                    cy="75"
                    style={{ strokeDasharray: `${percentage * 4.1} 410`, transition: 'stroke-dasharray 0.5s' }}
                />
            </svg>
            <div className="progress-text">{percentage}%</div>
        </div>
    );
};

export default CandidateInfo;
