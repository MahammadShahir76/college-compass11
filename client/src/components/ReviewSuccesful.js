import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ReviewSuccesful.css'

function ReviewSuccesful() {

  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Effect to load the count from localStorage when the component mounts
  useEffect(() => {
    const storedCount = localStorage.getItem('clickCount');
    if (storedCount) {
      setCount(parseInt(storedCount, 10));
    }
  }, []);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('clickCount', newCount);
    setIsVisible(true); // Make the text and count visible after click
  };

  return (
    <div className='SUCCESS'>
        <div className="blob blob1"></div>
                <div className="blob blob2"></div>
                <div className="blob blob3"></div>
                <div className="blob blob4"></div>
      <h1>Review is successful</h1>
      <div className="slider1">
                            <video autoPlay muted playsInline style={{ width: '100%' }}>
                                <source src="./images/right.MP4" type="video/MP4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
      <div style={styles.container}>
        <h1>Number Of Attended VideoCalls</h1>
        <div className='review-btn'>
        <button style={styles.button} onClick={handleClick}>Click</button>
     <button> <Link to="/">Get Back</Link></button>
     </div>
        {isVisible && (
          <div className='review-p'>
          <p>VideoCalls Attended with Aluminis: {count} times</p> </div>// Show this only when button is clicked
        )}
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
    margin: '80px 0', // 25px margin from top and bottom
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default ReviewSuccesful;