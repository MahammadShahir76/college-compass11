import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faThList, faCode,faLaptopCode, faLock,  faCloud,  faChartLine,  faPalette,  faMobileAlt,  faGamepad } from '@fortawesome/free-solid-svg-icons';
import './DomainSelection.css';

function DomainSelection() {
    return (
        <div>
            <h2 className="domain-heading">Choose The Students According to Your Domain</h2>
            
            <div className='domain-container'>
                <div className="domains">
                    <FontAwesomeIcon icon={faThList} className="domain-icon" />
                    <h1><Link to="/BulkDetails">All Domain Students</Link></h1>
                    <p>Explore all available domains.</p>
                </div>
                <div className="domains">
                    <FontAwesomeIcon icon={faCode} className="domain-icon" />
                    <h1><Link to="/WebDeveloper">Web Development Students</Link></h1>
                    <p>Find skilled web developers.</p>
                </div>
                <div className="domains">
                    <FontAwesomeIcon icon={faLaptopCode} className="domain-icon" />
                    <h1><Link to="/SoftwareDeveloper">Software Developement Students</Link></h1>
                    <p>Discover talented software developers.</p>
                </div>
                <div className="domains">
                    <FontAwesomeIcon icon={faLock} className="domain-icon" />
                    <h1><Link to="/BlockchainDeveloper">Blockchain Developement Students</Link></h1>
                    <p>Connect with blockchain experts.</p>
                </div>
                <div className="domains">
                    <FontAwesomeIcon icon={faCloud} className="domain-icon" />
                    <h1><Link to="/DevopsEngineer">DevOps Developement Students</Link></h1>
                    <p>Hire skilled DevOps engineers.</p>
                </div>
                <div className="domains">
                    <FontAwesomeIcon icon={faChartLine} className="domain-icon" />
                    <h1><Link to='/DataScientist'>Data Scientist Students</Link></h1>
                    <p>Explore data science professionals.</p>
                </div>
                <div className="domains">
                    <FontAwesomeIcon icon={faPalette} className="domain-icon" />
                    <h1><Link to="/UIUXDesigner">UI/UX Designer Students</Link></h1>
                    <p>Hire creative UI/UX designers.</p>
                </div>
                <div className="domains">
                    <FontAwesomeIcon icon={faMobileAlt} className="domain-icon" />
                    <h1><Link to="/MobileDeveloper">Mobile Development Students</Link></h1>
                    <p>Connect with mobile app developers.</p>
                </div>
                <div className="domains">
                    <FontAwesomeIcon icon={faGamepad} className="domain-icon" />
                    <h1><Link to="/GameDeveloper">Game Developement Students</Link></h1>
                    <p>Find talented game developers.</p>
                </div>
            </div>
        </div>
    );
}

export default DomainSelection;
