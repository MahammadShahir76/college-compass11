import React, { useState } from "react";
import './SoftwareDeveloper.css'; // Import the CSS file

function WebDeveloper() {
    const [products, setProducts] = useState([]);
    const [hasSearched, setHasSearched] = useState(false); // New state to track if the search has been performed

    const filterData = async () => {
        let key = "Software Developer";
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            setHasSearched(true); // Set the flag indicating that search has been performed
            if (result) {
                setProducts(result);
            }
        }
    };

    return (
        <div className="web-developer-container">
            <button onClick={filterData} className="filter-button">Filter</button>

            {
                hasSearched ? (
                    products.length > 0 ? (
                        <div className="cards-container">
                            {products.map((item) => (
                                <div className="card" key={item._id}>
                                    <h3 className="card-title">{item.applicantname}</h3>
                                    <p className="card-info"><strong>Domain:</strong> {item.applicantDomain}</p>
                                    <p className="card-info"><strong>Email:</strong> {item.applicantemailid}</p>
                                    <p className="card-info"><strong>Phone No:</strong> {item.applicantphoneno}</p>
                                    <a href='http://localhost:3001/' className="meeting-link">Host a Meeting</a>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <h1 className="no-data">No candidate in this domain is listed yet.</h1>
                    )
                ) : null
            }
        </div>
    );
}

export default WebDeveloper;
