import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CandidateOverview.css'; // Import the CSS file

function CandidateOverview() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    getReview();
  }, []);

  const getReview = async () => {
    let result = await fetch('http://localhost:5000/overview');
    result = await result.json();
    setResult(result);
  };

  // Function to convert the result data into CSV and trigger download
  const downloadData = () => {
    const csvData = result.map((item) => ({
      Domain: item.domain,
      Review1: item.review1,
      Review2: item.review2,
      Review3: item.review3,
      Description: item.description
    }));

    // Convert to CSV format
    const csv = [
      ['Domain', 'Review1', 'Review2', 'Review3', 'Description'], // CSV headers
      ...csvData.map((row) =>
        [row.Domain, row.Review1, row.Review2, row.Review3, row.Description].join(',')
      )
    ].join('\n');

    // Create a blob and download the file
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'candidate_data.csv';
    link.click();
  };

  return (
    <div className="candidate-overview-container11">
      <h1>Candidate Overview</h1>
      <div className="cards-container">
        {
          result.length > 0 ? result.map((items, index) => (
            <div className="card" key={index}>
              <h3 className="card-title">{items.domain}</h3>
              <p className="card-info">Technical review: {items.review1}/10</p>
              <p className="card-info">Technical knowledge: {items.review2}</p>
              <p className="card-info">Domain expertice : {items.review3}</p>
              <p className="card-info">About candidate: {items.description}</p>
            </div>
          )) : <h1 className="no-data">No Reviews Found</h1>
        }
      </div>
      <div className="">
        <button className="download-button" onClick={downloadData}>Download</button>
      </div>
      <Link className="back-link" to="/">Back to Home</Link>
    </div>
  );
}

export default CandidateOverview;
