import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CandidateDetails.css'; // Import the CSS file

function CandidateDetails() {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        getCandidate();
    }, []);

    const getCandidate = async () => {
        let result = await fetch('http://localhost:5000/candidateDetails');
        result = await result.json();
        setCandidates(result);
    };

    return (
        <div className="candidate-details-container">
            <h1>Interviewers List</h1>
            <div className="cards-container">
                {
                    candidates.length > 0 ? candidates.map((items, index) => (
                        <div className="card" key={index}>
                            <h3 className="card-title">{items.name}</h3>
                            <p className="card-info">contact: {items.contact}</p>
                            <p className="card-info">Year of Graduation: {items.graduationyear}</p>
                            <p className="card-info">Currently Working as: {items.workingas} years</p>
                            <p className="card-info">Experience: {items.experience}</p>
                            <p className="card-info">Domain: {items.domain}</p>
                            <p className="card-info">specialisation: {items.specialisation}</p>
                        </div>
                    )) : <h1 className="no-data">No Aluminis Found</h1>
                }
            </div>
            <Link className="back-link" to="/">Back to Home</Link>
        </div>
    );
}

export default CandidateDetails;