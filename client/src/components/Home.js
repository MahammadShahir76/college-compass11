import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faUserFriends, faRocket, faNetworkWired, faUsers, faCogs } from '@fortawesome/free-solid-svg-icons';  // Importing icons
import './Home.css';

function Home() {
    useEffect(() => {
        // Add Chatbase chatbot script dynamically
        const script = document.createElement('script');
        script.src = "https://www.chatbase.co/embed.min.js";
        script.async = true;
        script.defer = true;
        script.setAttribute("chatbotId", "nu0FUduHeJpGwmQqET86C");
        script.setAttribute("domain", "www.chatbase.co");

        window.embeddedChatbotConfig = {
            chatbotId: "nu0FUduHeJpGwmQqET86C",
            domain: "www.chatbase.co"
        };

        document.body.appendChild(script);

        return () => {
            // Clean up the script if component unmounts
            const chatbox = document.getElementById("chatbase-chatbot");
            if (chatbox) {
                chatbox.remove();
            }
        };
    }, []);

    return (
        <div>
            <div className="hero-section">
                <div className="heading">
                    <h1>Connect and Empower </h1>
                    <h1>Students and Alumni</h1>
                    <div className="para">
                        <p>At College Compass, senior alumni mentor students by fostering meaningful connections, offering guidance, and sharing valuable career insights</p> 
                        <p>helping students navigate their educational and professional paths with confidence.</p>
                    </div>
                </div>
                <div className="card-parent">
                    <div className="card1">
                        <div className="box2">
                            <div className='Box1'>
                                <div className="box1-logo">
                                    <FontAwesomeIcon icon={faUsers} size="3x" />
                                </div>
                                <div className="Link">
                                    <Link to="/CandiadteInfo"><h2>Alumni</h2></Link>
                                    <p>College Compass bridges the gap between students and alumni, allowing alumni to share their experiences, offer mentorship, and help students navigate their career paths with valuable advice and support.</p>
                                </div>
                            </div>
                        </div>
                        <div className="box2">
                            <div className='Box1'>
                                <div className="box1-logo">
                                    <FontAwesomeIcon icon={faUserFriends} size="3x" />
                                </div>
                                <div className="Link">
                                    <Link to="/companyInfo"><h2>Student</h2></Link>
                                    <p>College Compass seamlessly connects students with experienced alumni, ask questions, and receive personalized guidance to enhance their academic and professional journeys.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="features">
                    <div className="feature-h2">
                        <h2>Feature Boxes</h2>
                    </div>
                    <div className="feature-p">
                        <p>A good design is not only aesthetically pleasing, but also functional</p> 
                        <p>It should be able to solve the problem </p>
                    </div>
                    <div className="main-box">
                        <div className="feature-boxes">
                            <div className="sub-boxes">
                                <FontAwesomeIcon icon={faHandshake} size="3x" />
                            </div>
                            <div className="boxe-h3"><h3>Alumni Interaction</h3></div>
                            <div className="box-p"><p>Tools for senior alumni to communicate, guide, and mentor current students seamlessly.</p></div>
                        </div>
                        <div className="feature-boxes">
                            <div className="sub-boxes">
                                <FontAwesomeIcon icon={faUsers} size="3x" />
                            </div>
                            <div className="boxe-h3"><h3>Student Profiles</h3></div>
                            <div className="box-p"><p>Tools for students and alumni to connect, share experiences, and foster mentorship opportunities.</p></div>
                        </div>
                        <div className="feature-boxes">
                            <div className="sub-boxes">
                                <FontAwesomeIcon icon={faRocket} size="3x" />
                            </div>
                            <div className="boxe-h3"><h3>Skill Development</h3></div>
                            <div className="box-p"><p> Tools for senior alumni to help students enhance their skills and provide guidance for their professional growth.</p></div>
                        </div>
                        <div className="feature-boxes">
                            <div className="sub-boxes">
                                <FontAwesomeIcon icon={faCogs} size="3x" />
                            </div>
                            <div className="boxe-h3"><h3>Mentorship System</h3></div>
                            <div className="box-p"><p> Tools for senior alumni to schedule, conduct, and manage mentoring sessions with students effortlessly.</p></div>
                        </div>

                        <div className="feature-boxes">
                            <div className="sub-boxes">
                                <FontAwesomeIcon icon={faNetworkWired} size="3x" />
                            </div>
                            <div className="boxe-h3"><h3>Networking Opportunities</h3></div>
                            <div className="box-p"><p> Tools to connect senior alumni with students, facilitating professional networking and career development.</p></div>
                        </div>
                        <div className="feature-boxes">
                            <div className="sub-boxes">
                                <FontAwesomeIcon icon={faCogs} size="3x" />
                            </div>
                            <div className="boxe-h3"><h3>Collaboration Tools</h3></div>
                            <div className="box-p"><p> Tools for senior developers to schedule, conduct, and manage interviews seamlessly.</p></div>
                        </div>
                    </div>
                    
                    <div className="GetTouch">
                        <div className="global">
                            <img src="./images/globe.png" alt="" />
                        </div>
                        <div className="form">
                            <h2>Get in touch</h2>
                            <div className="form-para">
                                <p>Your feedback helps us improve. Let us know what we’re doing well and.</p> <p> where we can enhance your experience. </p></div>
                            <div className="input1">
                                <input type="email" placeholder='Enter your mail' />
                                <input type="text" placeholder='Name' />
                            </div>
                            <div className="input2">
                                <input type="text" placeholder='Feedback' />
                            </div>
                            <div className="form-btn">
                                <button>
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>

                    <footer style={{ backgroundColor: '#18181C', color: '#fff', padding: '20px', textAlign: 'center' }}>
                        <div className="footer-container">
                            <div className="about-us">
                                <h3>About Us</h3>
                                <p>College Compass connects students with experienced alumni. We ensure students receive valuable guidance and mentorship from seasoned professionals.</p>
                            </div>

                            <div className="links">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><Link to="/Home"><p>Home</p></Link></li>
                                    <li><Link to="/about"><p>About Us</p></Link></li>
                                    <li><Link to="/services"><p>Services</p></Link></li>
                                    <li><Link to="/contact"><p>Contact </p></Link></li>
                                </ul>
                            </div>

                            <div className="contact-info">
                                <h3>Contact Information</h3>
                                <p>Email: info@collegeCompass.com</p>
                                <p>Phone: +1 (234) 567-8901</p>
                            </div>

                            <div className="social-media">
                                <h3>Follow Us</h3>
                                <Link to="#" target="_blank"><p>LinkedIn</p></Link>
                                <Link to="#" target="_blank"><p>Twitter</p></Link>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default Home;
