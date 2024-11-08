import React, { useEffect, useState } from 'react';
import './BulkDetails.css'; // Import the CSS file

function BulkDetails() {
    const [fresherslist, setFresherslist] = useState([]);

    useEffect(() => {
        getFreshers();
    }, []);

    const getFreshers = async () => {
        let result = await fetch('http://localhost:5000/freshers');
        result = await result.json();
        setFresherslist(result);
    };

    return (
        <div className="bulk-container1">
            <h1 className="bulk-title1">Student Details</h1>
            {fresherslist.length > 0 ? (
                <div className="freshers-container1">
                    {fresherslist.map((items) => (
                        <div className="fresher-card1" key={items._id}>
                            <h3 className="fresher-domain1">Domain: {items.applicantDomain}</h3>
                            <h3 className="fresher-name1"> Name : {items.applicantname}</h3>
                            <h4 className="fresher-email1">Email : {items.applicantemailid}</h4>
                            <h4 className="fresher-phone1">Ph No :{items.applicantphoneno}</h4>
                            <a href="http://localhost:3001/" className="meeting-link1">Host a Meeting</a>
                        </div>
                    ))}
                </div>
            ) : (
                <h1 className="no-candidate1">No candidate listed yet in this domain</h1>
            )}
           
        </div>
    );
}

export default BulkDetails;
