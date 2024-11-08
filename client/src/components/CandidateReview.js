import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CandidateReview.css'; // Import the CSS file

// A simple Star component for the rating system
const StarRating = ({ setReview, reviewValue }) => {
  const [rating, setRating] = useState(reviewValue || 0);

  const handleRating = (value) => {
    setRating(value);
    setReview(value); // Set the review state to the selected star rating
  };

  return (
    <div className="star-rating">
      {[...Array(10)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={`star ${starValue <= rating ? 'active' : ''}`}
            onClick={() => handleRating(starValue)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

function CandidateReview() {
  const [name, setName] = useState('');
  const [domain, setDomain] = useState('');
  const [review1, setReview1] = useState('');
  const [review2, setReview2] = useState('');
  const [review3, setReview3] = useState('');
  const [description, setDescription] = useState('');

  const [Error, setError] = useState(false);

  const addReview = async () => {
    if (!name || !domain || !review1 || !review2 || !review3 || !description) {
      setError(true);
      return false;
    }
    const userId = JSON.parse(localStorage.getItem('User'))._id;

    let result = await fetch('http://localhost:5000/add-review', {
      method: 'post',
      body: JSON.stringify({ name, domain, review1, review2, review3, description, userId }),
      headers: { 'Content-type': 'application/json' }
    });
    result = await result.json();
    // navigate("/")
  };

  return (
    <div className="candidate-review-container11">
      <h1>Alumini Review</h1>

      <input
        type='text'
        placeholder='Enter Alumini name'
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="input-field"
      />
      {Error && !name && <span className="error-message">Enter valid name</span>}

      <input
        type='text'
        placeholder='Enter discussed domain'
        onChange={(e) => setDomain(e.target.value)}
        value={domain}
        className="input-field"
      />
      {Error && !domain && <span className="error-message">Enter valid domain</span>}
<div className='axysuzp4'>
      {/* Star rating for Review 1 */}
      <h3>Technical Explanation</h3>
      <StarRating setReview={setReview1} reviewValue={review1} />
      {Error && !review1 && <span className="error-message">Enter valid review</span>}

      {/* Star rating for Review 2 */}
      <h3>Technical knowledge</h3>
      <StarRating setReview={setReview2} reviewValue={review2} />
      {Error && !review2 && <span className="error-message">Enter valid review</span>}

      {/* Star rating for Review 3 */}
      <h3>Domain expertice</h3>
      <StarRating setReview={setReview3} reviewValue={review3} />
      {Error && !review3 && <span className="error-message">Enter valid review</span>}
      </div>
      <input
        type='text'
        placeholder='Overall Candidate Review'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="input-field"
      />
      {Error && !description && <span className="error-message">Enter valid description</span>}

<div className='submit-button'>
      <button type='button' onClick={addReview} >
        Add
      </button></div>
      <Link to='/ReviewSuccesful' className="next-link3">Next</Link>
    </div>
  );
}

export default CandidateReview;
