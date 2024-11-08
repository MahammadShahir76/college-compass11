import React, { useState } from "react";
import './WebDeveloper.css'; // Import the CSS file

function WebDeveloper() {
    const [products, setProducts] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    const filterData = async () => {
        let key = "Web Developer";
        if (key) {
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            setHasSearched(true);
            if (result) {
                setProducts(result);
            }
        }
    };

    return (
        <div className="web-developer-container">
            <button className="filter-button" onClick={filterData}>Filter</button>

            <div className="cards-container">
                {
                    hasSearched && products.length > 0 ? (
                        products.map((items) => (
                            <div className="card" key={items._id}>
                                <h3 className="card-title">{items.applicantname}</h3>
                                <p className="card-info">Domain: {items.applicantDomain}</p>
                                <p className="card-info">Email: {items.applicantemailid}</p>
                                <p className="card-info">Phone: {items.applicantphoneno}</p>
                                <a href='http://localhost:3001/' className="meeting-link">Host a Meeting</a>
                            </div>
                        ))
                    ) : (
                        hasSearched && <h1 className="no-data">No candidate in this domain is listed yet.</h1>
                    )
                }
            </div>
        </div>
    );
}

export default WebDeveloper;
