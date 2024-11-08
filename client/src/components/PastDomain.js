import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faDatabase, faCube, faServer } from '@fortawesome/free-solid-svg-icons';
import './PastDomain.css'; 

function PastDomain() {
  return (
    <div className="main-container">
      <div className="domain-container">
        <div className="domains">
          <FontAwesomeIcon icon={faLaptopCode} className="domain-icon" />
          <h1 className="domain-heading"><Link to="/PwebDeveloper">Web Developer</Link></h1>
        </div>
        <div className="domains">
          <FontAwesomeIcon icon={faDatabase} className="domain-icon" />
          <h1 className="domain-heading"><Link to="/PsoftwareDeveloper">Software Developer</Link></h1>
        </div>
        <div className="domains">
          <FontAwesomeIcon icon={faCube} className="domain-icon" />
          <h1 className="domain-heading"><Link to="/PblockchainDeveloper">Blockchain Developer</Link></h1>
        </div>
        <div className="domains">
          <FontAwesomeIcon icon={faServer} className="domain-icon" />
          <h1 className="domain-heading"><Link to="/PdevopsEngineer">DevOps Engineer</Link></h1>
        </div>
      </div>
    </div>
  );
}

export default PastDomain;

