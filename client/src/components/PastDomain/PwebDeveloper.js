import React, { useState } from "react";
import './PwebDeveloper.css'; // Import the CSS file

function PwebDeveloper() {
    const [products, setProducts] = useState([]);
    const [hasSearched, setHasSearched] = useState(false); // New state to track if the search has been performed

    const filterData = async () => {
        let key = "Web Developer";
        if (key) {
            let result = await fetch(`http://localhost:5000/searchs/${key}`);
            result = await result.json();
            setHasSearched(true); // Set the flag indicating that search has been performed
            if (result) {
                setProducts(result);
            }
        }
    };

    return (
        <div className="web-developer-container">
            <button className="filter-button" onClick={filterData}>See Ratings given by freshers</button>

            <div className="cards-container">
                {
                    hasSearched && products.length > 0 ? (
                        products.map((items) => (
                            <div className="card" key={items._id}>
                                <h3 className="card-title">{items.name}</h3>
                                <p className="card-info">Domain: {items.domain}</p>
                                <p className="card-info">Technical Explanation: {items.review1}/10</p>
                                <p className="card-info">Technical knowledge: {items.review2}/10</p>
                                <p className="card-info">Domain Expertise: {items.review3}/10</p>
                                <p className="card-info">Description: {items.description}</p>
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

export default PwebDeveloper;
