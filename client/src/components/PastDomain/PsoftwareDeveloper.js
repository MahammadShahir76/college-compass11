import React, { useState } from "react";
import './PsoftwareDeveloper.css'; // Import the CSS file

function PsoftwareDeveloper() {
    const [products, setProducts] = useState([]);
    const [hasSearched, setHasSearched] = useState(false); // New state to track if the search has been performed

    const filterData = async () => {
        let key = "Software Developer";
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
        <div className="software-developer-container">
            <button className="filter-button" onClick={filterData}>See Ratings given by freshers</button>

            <div className="cards-container">
                {
                    hasSearched && products.length > 0 ? (
                        products.map((items) => (
                            <div className="card" key={items._id}>
                                <h3 className="card-title">{items.name}</h3>
                                <p className="card-info">Domain: {items.domain}</p>
                                <p className="card-info">Review 1: {items.review1}</p>
                                <p className="card-info">Review 2: {items.review2}</p>
                                <p className="card-info">Review 3: {items.review3}</p>
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

export default PsoftwareDeveloper;
